import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "../../../utils/prisma"
import { Session } from "../../../utils/types"
import { JWT } from "next-auth/jwt"

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        return {
          username: profile.login,
          location: profile.location,
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
        }
      },
    }),
  ],
  pages: {
    signIn: "/register",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // send info to the FE
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token?.sub) {
        const idUser = await prisma.user.findUnique({
          where: {
            id: token.sub,
          },
        })
        if (!session?.user) return session
        session.user.registrationNumber = idUser?.registrationNumber
        session.user.username = idUser?.username
        session.user.donationAmount = idUser?.donationAmount
        session.user.registeredFor = idUser?.registeredFor
      }
      return session
    },
  },
})
