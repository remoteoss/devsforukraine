import { GetServerSideProps } from "next"
import { getSession, signIn } from "next-auth/react"
import Layout from "../components/layout"
import { Session } from "../utils/types"

const Register = () => (
  <Layout>
    <button
      className="button"
      onClick={() => signIn("github", { callbackUrl: "/tickets/redirect" })}
    >
      Sign in with GitHub
    </button>
  </Layout>
)

export default Register

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
    props: {},
  }
}
