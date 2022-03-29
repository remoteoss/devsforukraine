
import type { NextApiRequest, NextApiResponse } from "next"
import Stripe from 'stripe';
import { PAYMENT_STEPS } from "../../../utils/constants";
const stripe = new Stripe(process.env.STRIPE_SECRET as string, {
    apiVersion: "2020-08-27",
})

const paymentLink = async (req: NextApiRequest, res: NextApiResponse) => {
    const { amount }: { amount: string } = req.body;
    const paymentLink = await stripe.paymentLinks.create({
        line_items: [{ price: "price_1Kiea7HBAwZqYr8ov0rUMbNl", quantity: parseInt(amount) }],
        after_completion: { type: 'redirect', redirect: { url: `${process.env.NEXTAUTH_URL}/donate?step=${PAYMENT_STEPS.FINAL}&amount=${amount}` } },
    });
    res.send({
        paymentLink,
    });
}

export default paymentLink;