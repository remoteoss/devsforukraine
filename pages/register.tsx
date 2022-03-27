import { signIn } from "next-auth/react"
import Layout from "../components/layout"

const Register = () => (
  <Layout>
    <button
      onClick={() => signIn("github", { callbackUrl: "/tickets/redirect" })}
    >
      Sign in with Github
    </button>
  </Layout>
)

export default Register
