import { GetServerSideProps } from "next"
import Link from "next/link"
import Layout from "../../components/layout"
import { Ticket } from "../../components/Tickets"
import { getAbsoluteURL } from "../../utils/absoluteUrl"
import { Session, UserType } from "../../utils/types"

const UserTicket = ({ user }: { user: UserType }) => {
  if (!user) return null
  const firstName = user.name.split(" ")[0]
  return (
    <Layout>
      <div className="lg:flex justify-center">
        <div>
          <h1 className="">
            <span className="capitalize">{firstName}</span>
            {"'"}s ticket
          </h1>
          <p>
            Congratulations, you got an epic card! Share your unique ticket now
            and discover what other tickets hold!
          </p>
          <>SHARE ON TWITTER</>
          <p>
            Want to be a part of the conference too?{" "}
            <Link href="register">Register now</Link>
          </p>
        </div>
        <Ticket {...user} />
      </div>
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
