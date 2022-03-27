import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import { Session } from "../../utils/types"

const RedirectPage = () => null

export default RedirectPage

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = (await getSession({ req })) as Session
  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: `/tickets/${session?.user?.username}`,
      },
    }
  }

  return {
    redirect: {
      permanent: false,
      destination: "/",
    },
  }
}
