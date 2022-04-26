import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "../../../utils/prisma"
import tmi from 'tmi.js'
import { USDFormatter } from '../../../utils/constants';


const CHANNEL = "devsforukraine";
const BOT_USER_NAME = "devsforukrainebot";

const sendTwitchMessage = async function (amount: number) {
    const client = new tmi.Client({
        options: { debug: true },
        connection: {
            secure: true,
            reconnect: true
        },
        identity: {
            username: BOT_USER_NAME,
            password: process.env.TWITCH_BOT_OAUTH_TOKEN
        },
        channels: []
    });
    const balance = await prisma.donation.findMany({
        include: {
            User: true,
        }
    })

    const all = balance.reduce((acc, cur) => acc + cur.amount, 0)

    client.connect().then(() => {
        client.say(CHANNEL, `Got a new donation of ${amount}$! KA-CHING! We now have a total of ${USDFormatter.format(all)}💰`);
        client.disconnect();
    });
};

const webhook = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const body = req.body;
        // Handle the event
        switch (body.type) {
            case 'checkout.session.completed':
                const session: any = body.data.object;
                if (session.status === "complete" && session.metadata.id === process.env.STRIPE_PRICE_ID) {

                    const charge = session.amount_total
                    const email = session.customer_details.email

                    const user = await prisma.user.findFirst({
                        where: {
                            email,
                        }
                    })

                    if (user) {
                        await prisma.donation.create({
                            data: {
                                amount: charge / 100,
                                userId: user.id,
                            }
                        })
                    } else {
                        await prisma.donation.create({
                            data: {
                                amount: charge / 100,
                                email,
                            }
                        })
                    }
                    try {
                        await sendTwitchMessage(charge / 100)
                    }
                    // eslint-disable-next-line no-console
                    catch (e) { console.log(e) }
                }

                break;
            default:
                break;
        }



        // Return a 200 res to acknowledge receipt of the body
        res.send({ received: true });
    } catch (e: any) {
        res.send({ error: e?.message });
    }
}


export default webhook;
