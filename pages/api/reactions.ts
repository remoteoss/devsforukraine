import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../utils/prisma"

const question = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { reaction } = req.body

        try {
            const updated = await prisma.reactions.update({
                where: { colons: reaction.colons },
                data: {
                    uses: {
                        increment: 1
                    }
                }
            })

            res.send({ updated })
        } catch {
            const newReaction = await prisma.reactions.create({
                data: { ...reaction, uses: 1 }
            })

            res.send({
                newReaction
            })
        }
    } else {
        const reactions = await prisma.reactions.findMany({
            orderBy: {
                uses: "desc"
            }
        })

        res.send(reactions)
    }
}

export default question