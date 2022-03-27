import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../utils/prisma"
import { omit } from 'lodash-es'

const user = async (req: NextApiRequest, res: NextApiResponse) => {
    const { query: { username } } = req

    const user = await prisma.user.findUnique({
        where: {
            username: username as string,
        },
    })

    res.send({
        user: omit(user, ["id", "updatedAt", "email", "emailVerified"]),
    })
}

export default user