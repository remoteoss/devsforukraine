import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe'
var getRawBody = require('raw-body')
const endpointSecret = "whsec_26155e8595cf6d13a180858cc63256afe653fd1c4a43a50cd9f73bc38eac4736";


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
            const paymentIntent = event.data.object;
            console.log(JSON.stringify(paymentIntent))
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