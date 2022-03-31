import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe'
import { prisma } from "../../../utils/prisma"
import getRawBody from 'raw-body'
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;


const stripe = new Stripe(process.env.STRIPE_SECRET as string, {
    apiVersion: "2020-08-27",
})

const webhook = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const sig = req.headers['stripe-signature'] as string;
        const rawBody = await getRawBody(req)
        const event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);

        // Handle the event
        switch (event.type) {
            case 'checkout.session.completed':
                const session: any = event.data.object;
                if (session.status === "complete" && session.metadata.id === process.env.STRIPE_PRICE_ID) {
                    const charge = session.amount_total

                    const email = charge.customer_details.email

                    const user = await prisma.user.findFirst({
                        where: {
                            email,
                        }
                    })

                    if (user) {
                        await prisma.donation.create({
                            data: {
                                amount: charge.amount / 100,
                                userId: user.id,
                            }
                        })
                    } else {
                        await prisma.donation.create({
                            data: {
                                amount: charge.amount / 100,
                                email,
                            }
                        })
                    }
                }

                break;
            default:
                console.log(`Unhandled event type ${event.type}`);
        }

        // Return a 200 res to acknowledge receipt of the event
        res.send({ received: true });
    } catch (e) {
        console.log("ERROR", e)
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
}

export default webhook;