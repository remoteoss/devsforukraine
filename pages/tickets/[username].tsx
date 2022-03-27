import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import Layout from "../../components/layout"
import { getAbsoluteURL } from "../../utils/absoluteUrl"
import { Session } from "../../utils/types"

const UserTicket = ({ user }: { user: Session["user"] }) => {
  if (!user) return null
  return (
    <Layout>
      <h1>UserTicket</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
}) => {
  const { username } = query
  const base = getAbsoluteURL(req)
  const { user } = await fetch(`${base}/api/user?username=${username}`).then(
    (rsp) => rsp.json()
  )
  return {
    props: { user },
  }
}

export default UserTicket
