import type { NextApiRequest, NextApiResponse } from "next"
import { GOAL } from "../../../utils/constants"
import { prisma } from "../../../utils/prisma"




const balance = async (req: NextApiRequest, res: NextApiResponse) => {
    const { _sum: { amount }, _count } = await prisma.donation.aggregate({
        _sum: {
            amount: true,
        },
        _count: true,
    })

    res.send({
        balance: amount,
        goal: GOAL,
        percentage: parseFloat(((amount || 0) / GOAL * 100).toFixed(2)),
        donations: _count
    })

}

export default balance