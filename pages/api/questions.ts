import { Role } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"
import { prisma } from "../../utils/prisma"
import { Session } from "../../utils/types"



const question = async (req: NextApiRequest, res: NextApiResponse) => {


    if (req.method === 'POST') {
        const { state, id } = req.body
        const session = await getSession({ req }) as Session

        if (!session || !session.user || !session?.user?.username) {
            res.status(401).json({ message: 'Not authenticated' })
            return
        }
        const user = await prisma.user.findFirst({
            where: {
                username: session.user.username
            }
        })
        if (!user || user.role !== Role.ADMIN) {
            res.status(401).json({ message: 'Not admin' })
            return
        }
        await prisma.question.update({
            where: {
                id
            },
            data: {
                rejected: state === "rejected",
                accepted: state === "accepted",
            }
        })

        res.send({ message: 'success' })
    } else {
        const questions = await prisma.question.findMany({
            orderBy: {
                createdAt: "desc",
            },
            include: {
                User: {
                    select: {
                        username: true,
                        email: true,
                        name: true,
                        image: true,
                    },
                },
            },
        })
        const allQuestions = questions.map((question) => ({
            ...question,
            createdAt: question.createdAt.toDateString(),
        }))

        res.send({
            questions: {
                accepted: allQuestions.filter((question) => question.accepted),
                // rejected: allQuestions.filter((question) => question.rejected),
                notViewed: allQuestions.filter((question) => !question.rejected && !question.accepted),
            }
        })
    }
}



export default question