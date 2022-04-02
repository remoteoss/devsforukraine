import type { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"
import { prisma } from "../../utils/prisma"
import { Session } from "../../utils/types"



const question = async (req: NextApiRequest, res: NextApiResponse) => {
    const { question } = req.body
    const session = await getSession({ req }) as Session


    const user = await prisma.user.findUnique({ where: { username: session?.user?.username || "" } })

    if (user?.id) {
        await prisma.question.create({
            data: {
                question: question,
                userId: user.id
            }
        })

        res.send({
            question, session
        })
    } else {
        res.send({ error: "user not found" })
    }
}

export default question