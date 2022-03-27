import type { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react";
import Stripe from 'stripe';
import { prisma } from "../../../utils/prisma";
import { Session } from "../../../utils/types";
const stripe = new Stripe(process.env.STRIPE_SECRET as string, {
    apiVersion: "2020-08-27",
})


const paymentIntent = async (req: NextApiRequest, res: NextApiResponse) => {
    const { amount, email }: { amount: string, email: string } = req.body;
    const session: Session | null = await getSession({ req })
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

    if (session && session.user) {
        const currentAmount = session.user?.donationAmount || 0;
        await prisma.user.update({
            where: {
                username: session.user.username as string,
            },
            data: {
                donationAmount: currentAmount + parseInt(amount),
            }
        })
    }

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

export default paymentIntent;