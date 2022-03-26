import type { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react";
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET as string, {
    apiVersion: "2020-08-27",
})


export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { amount, email }: { amount: string, email: string } = req.body;
    const session = await getSession({ req })
    const customerData = session ? {
        email: session?.user?.email,
        name: session?.user?.name,
    } : { email }
    // @ts-ignore
    const customer = await stripe.customers.create({
        ...customerData,
        metadata: {
            "amount": parseInt(amount),
        }
    });

    const paymentIntent = await stripe.paymentIntents.create({
        amount: parseInt(amount) * 100,
        currency: "eur",
        automatic_payment_methods: {
            enabled: true,
        },
        customer: customer.id,
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
}
