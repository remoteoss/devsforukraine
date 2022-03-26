import type { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET as string, {
    apiVersion: "2020-08-27",
})

const getBalance = (): Promise<Stripe.Balance> =>
    new Promise((resolve, reject) =>
        // @ts-ignore
        stripe.balance.retrieve((err, balance) => {
            if (err) reject(err)

            resolve(balance)
        })
    )

const GOAL = 15000 // 15k EUR

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const balance = await getBalance()
    const bothCombined =
        balance.available[0].amount + balance.pending[0].amount / 100

    res.send({
        balance: bothCombined,
        goal: GOAL,
        percentage: bothCombined / GOAL,
    })
}
