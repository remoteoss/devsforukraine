import classNames from "classnames"
import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

import { RegisterWithGithub } from "../../components/Buttons/RegisterGitHub"
import { SecondaryButton } from "../../components/Buttons/Secondary"
import { LinkIcon, TwitterIcon } from "../../components/Icons"
import Layout from "../../components/layout"
import { Ticket } from "../../components/Tickets"
import { H2, H4 } from "../../components/Typography"
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
  const imageUrl = `/api/og?name=${name}&username=${user.username}&registrationNumber=${user.registrationNumber}&image=${user.image}`

  return (
    <Layout noFooter withBG>
      <Head>
        <title>
          {firstName}
          {"'"}s ticket
        </title>
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:image:src" content={imageUrl}></meta>
        <meta name="image" content={imageUrl}></meta>
        <meta itemProp="image" content={imageUrl}></meta>
      </Head>

      <div className="flex flex-col items-center gap-8 mt-20 h-full relative z-1 min-h-screen sm:min-h-0">
        <div
          className={classNames(
            " max-w-full",
            isTicketHolder ? "w-[450px]" : "w-[610px]"
          )}
        >
          <H2 className="text-center">
            {isTicketHolder
              ? "Congratulations, you are registered!"
              : `${user.username} is attending DevsForUkraine!`}
          </H2>

          <H4 className="pt-4">
            {isTicketHolder
              ? ` We are delighted that you will be joining us for the
              DevsForUkraine event.`
              : `DevsForUkraine is a free, online conference with the goal to raise
              funds and provide support to Ukraine. `}
          </H4>
        </div>
        {isTicketHolder ? (
          <div className="flex gap-6 mb-12">
            <SecondaryButton
              href={`https://twitter.com/intent/tweet?url=https://devsforukraine.io/ticket/${user.username} I am going to devsforukraine!`}
              outsideWebsite
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
              Share on Twitter
            </SecondaryButton>
            <SecondaryButton
              onClick={async () =>
                // @ts-ignore
                await navigator.clipboard.writeText(window.location)
              }
            >
              <LinkIcon />
              Copy link
            </SecondaryButton>
          </div>
        ) : (
          <div className="flex gap-6 mb-12 items-center">
            <RegisterWithGithub />
            <Link href="/">
              <a className="text-devs-yellow block hover:underline">
                {" "}
                Read more
              </a>
            </Link>
          </div>
        )}
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
