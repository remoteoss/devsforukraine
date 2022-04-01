
import type { NextApiRequest, NextApiResponse } from "next"
import Stripe from 'stripe';
import { PAYMENT_STEPS } from "../../../utils/constants";

const stripe = new Stripe(process.env.STRIPE_SECRET as string, {
    apiVersion: "2020-08-27",
})

const PRICE_ID = process.env.STRIPE_PRICE_ID as string;
const URL = `${process.env.NEXTAUTH_URL}/donate`
const createSession = async (req: NextApiRequest, res: NextApiResponse) => {
    const { amount, email }: { amount: string, email: string } = req.body;

    const session = await stripe.checkout.sessions.create({
        success_url: `${URL}?step=${PAYMENT_STEPS.FINAL}`,
        cancel_url: `${URL}?step=${PAYMENT_STEPS.CANCEL}`,
        line_items:
            [{ price: PRICE_ID, quantity: parseInt(amount) }],
        customer_email: email,
        mode: 'payment',
        metadata: { id: PRICE_ID }
    });

    res.send({
        session,
    });
}

export default createSession;