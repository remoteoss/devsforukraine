import { GetServerSideProps } from "next"
import Head from "next/head"
import Link from "next/link"
import { ShareOnTwitterIcon } from "../../components/Icons"
import Layout from "../../components/layout"
import { Ticket } from "../../components/Tickets"
import { getAbsoluteURL } from "../../utils/absoluteUrl"
import { UserType } from "../../utils/types"

const UserTicket = ({ user }: { user: UserType }) => {
  if (!user || !user.createdAt) return null
  const firstName = user.name.split(" ")[0]
  return (
    <Layout>
      <Head>
        <title>
          {firstName}
          {"'"}s ticket
        </title>
        <meta
          property="og:image"
          content={`https://og-image-remotecom.vercel.app/ticket.png?name=${user.name}&username=${user.username}&registrationNumber=${user.registrationNumber}&image=${user.image}`}
        />
      </Head>
      <div className="xl:flex justify-center gap-8 items-center h-full">
        <div className="mb-12 lg:m-0">
          <h1 className="text-[43px] font-bold mb-6">
            <span className="capitalize">{firstName}</span>
            {"'"}s ticket
          </h1>
          <p className="text-slate-500">
            Congratulations, you got an epic card! Share your unique ticket now
            and discover what other tickets hold!
          </p>
          <>
            <a
              href={`https://twitter.com/intent/tweet?url=https://devsforukraine.io/ticket/${user.username} I am going to devsforukraine!`}
              target="_blank"
              rel="noreferrer"
              className="my-6 block"
            >
              <ShareOnTwitterIcon />
            </a>
          </>
          <p className="text-slate-500">
            Want to be a part of the conference too?{" "}
            <Link href="/register">
              <a className="text-devs-yellow"> Register now</a>
            </Link>
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
