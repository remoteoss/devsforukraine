import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import Layout from "../../components/layout"
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
  const protocol = req.headers["x-forwarded-proto"] || "http"
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ""
  const { user } = await fetch(baseUrl + `/api/user?username=${username}`).then(
    (rsp) => rsp.json()
  )
  return {
    props: { user },
  }
}

export default UserTicket
