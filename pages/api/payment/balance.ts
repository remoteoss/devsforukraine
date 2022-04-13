import type { NextApiRequest, NextApiResponse } from "next"
import { GOAL } from "../../../utils/constants"
import { prisma } from "../../../utils/prisma"




const balance = async (req: NextApiRequest, res: NextApiResponse) => {
    const balance = await prisma.donation.findMany({
        include: {
            User: true,
        }
    })

    const all = balance.reduce((acc, cur) => acc + cur.amount, 0)

    res.send({
        balance: all,
        goal: GOAL,
        percentage: parseFloat((all / GOAL * 100).toFixed(2)),
        donations: balance.length
    })

}

export default balance