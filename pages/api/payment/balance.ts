import type { NextApiRequest, NextApiResponse } from "next"
import { GOAL } from "../../../utils/constants"
import { prisma } from "../../../utils/prisma"




const balance = async (req: NextApiRequest, res: NextApiResponse) => {


    res.send({
        balance: 0
    })
}

export default balance