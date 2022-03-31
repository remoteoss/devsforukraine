import classNames from "classnames"
import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { LinkIcon, TwitterIcon } from "../../components/Icons"
import Layout from "../../components/layout"
import { Ticket } from "../../components/Tickets"
import { getAbsoluteURL } from "../../utils/absoluteUrl"
import { Session, UserType } from "../../utils/types"

const UserTicket = ({
  user,
  session,
}: {
  user: UserType
  session: Session
}) => {
  const router = useRouter()
  const isTicketHolder =
    session && session.user?.username === router.query.username
  if (!user || !user.createdAt) return null
  const names = user.name.split(" ")
  const firstName = names[0]
  const name =
    names.length > 2 ? `${names[0]} ${names[names.length - 1]}` : user.name
  return (
    <Layout>
      <Head>
        <title>
          {firstName}
          {"'"}s ticket
        </title>
        <meta
          property="og:image"
          content={`https://og-image-remotecom.vercel.app/ticket.png?name=${name}&username=${user.username}&registrationNumber=${user.registrationNumber}&image=${user.image}`}
        />
      </Head>
      <div className="flex flex-col items-center gap-8 h-full">
        <div
          className={classNames(
            " max-w-full",
            isTicketHolder ? "w-[450px]" : "w-[610px]"
          )}
        >
          <h1 className="text-[40px] font-bold mb-6 text-center font-bossa">
            {isTicketHolder
              ? "Congratulations, you are registered!"
              : `${user.username} is attending the DevsForUkraine conference`}
          </h1>
          {isTicketHolder ? (
            <p className="text-devs-gray100 text-center font-light">
              We are delighted that you will be joining us for the
              DevsForUkraine event.
            </p>
          ) : (
            <p className="text-devs-gray100 text-center text-sm pt-4">
              Want to be part of the conference?
              <Link href="/register">
                <a className="text-devs-yellow block"> Register now</a>
              </Link>
            </p>
          )}
        </div>
        <div className="flex gap-6 mb-12">
          <a
            href={`https://twitter.com/intent/tweet?url=https://devsforukraine.io/ticket/${user.username} I am going to devsforukraine!`}
            target="_blank"
            rel="noreferrer"
            className="bg-devs-gray200 px-4 py-2 rounded-md font-normal text-xs gap-2 items-center  flex"
          >
            <TwitterIcon />
            Share on Twitter
          </a>
          <button
            onClick={async () =>
              // @ts-ignore
              await navigator.clipboard.writeText(window.location)
            }
            className="bg-devs-gray200 px-4 py-2 rounded-md font-normal text-xs gap-2 items-center  flex"
          >
            <LinkIcon />
            Copy link
          </button>
        </div>
        <Ticket {...{ ...user, name }} />
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
  const session = await getSession({ req })
  const { user } = await fetch(`${base}/api/user?username=${username}`).then(
    (rsp) => rsp.json()
  )
  return {
    props: { user, session },
  }
}

export default UserTicket
