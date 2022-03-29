import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe'
import { prisma } from "../../../utils/prisma"
import getRawBody from 'raw-body'
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;


const stripe = new Stripe(process.env.STRIPE_SECRET as string, {
    apiVersion: "2020-08-27",
})

const webhook = async (req: NextApiRequest, res: NextApiResponse) => {
    const sig = req.headers['stripe-signature'] as string;
    const rawBody = await getRawBody(req)

    const event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);

    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntent: any = event.data.object;
            if (paymentIntent.status === "succeeded") {
                const charge = paymentIntent.charges.data[0]
                const email = charge.billing_details.email

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
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 res to acknowledge receipt of the event
    res.send({ received: true });
}

export const config = {
    api: {
        bodyParser: false,
    },
}

export default webhook;