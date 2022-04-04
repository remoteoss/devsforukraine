import classNames from "classnames"
import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

import { RegisterWithGitHub } from "../../components/Buttons/RegisterGitHub"
import { SecondaryButton } from "../../components/Buttons/Secondary"
import { LinkIcon, TwitterIcon } from "../../components/Icons"
import Layout from "../../components/layout"
import { Ticket } from "../../components/Tickets"
import {
  Label,
  MotionH2,
  MotionSubHeadlineLarge,
} from "../../components/Typography"
import { getAbsoluteURL } from "../../utils/absoluteUrl"
import { Session, UserType } from "../../utils/types"
import { motion } from "framer-motion"
import { DEFAULT_MOTION } from "../../utils/constants"

const UserTicket = ({
  user,
  session,
}: {
  user: UserType
  session: Session
}) => {
  const [copied, setCopied] = useState(false)
  const router = useRouter()
  const isTicketHolder =
    session && session.user?.username === router.query.username
  if (!user || !user.createdAt) return null
  const names = user.name.split(" ")
  const firstName = names[0]
  const name =
    names.length > 2 ? `${names[0]} ${names[names.length - 1]}` : user.name
  const imageUrl = `/api/og?name=${name}&username=${user.username}&registrationNumber=${user.registrationNumber}&image=${user.image}`

  const copyToClipboard = async () => {
    // @ts-ignore
    await navigator.clipboard.writeText(window.location)
    setCopied(true)
    window.setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  const tweetCopy = 'I%27m%20going%20to%20DevsForUkraine,%20a%20free%20conference%20to%20benefit%20Ukraine%20with%2016%20awesome%20speakers!%20Will%20I%20see%20you%20there?`

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
          <MotionH2 {...DEFAULT_MOTION()} className="text-center">
            {isTicketHolder
              ? "Congratulations, you are registered!"
              : `${user.username} is attending DevsForUkraine!`}
          </MotionH2>

          <MotionSubHeadlineLarge
            {...DEFAULT_MOTION({ delay: 0.2 })}
            className="pt-4 !text-devs-gray100 text-center"
          >
            {isTicketHolder
              ? ` We are delighted that you will be joining us for the
              DevsForUkraine event.`
              : `DevsForUkraine is a free, online conference with the goal to raise
              funds and provide support to Ukraine. `}
          </MotionSubHeadlineLarge>
        </div>
        {isTicketHolder ? (
          <motion.div
            {...DEFAULT_MOTION({ delay: 0.2 })}
            className="flex gap-3 mb-12 items-start"
          >
            <SecondaryButton
              href={`https://twitter.com/intent/tweet?text=${tweetCopy}&url=https://devsforukraine.io/ticket/${user.username}`}
              outsideWebsite
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
              Share on Twitter
            </SecondaryButton>
            <div className="relative">
              <SecondaryButton onClick={copyToClipboard}>
                <LinkIcon />
                Copy link
              </SecondaryButton>
              {copied && (
                <Label className="text-center w-full !text-devs-gray100 pt-2 absolute">
                  Link Copied!
                </Label>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            {...DEFAULT_MOTION({ delay: 0.2 })}
            className="flex gap-3 mb-12 items-center"
          >
            <RegisterWithGitHub />
            <Link href="/">
              <a className="text-devs-yellow block hover:underline">
                {" "}
                Read more
              </a>
            </Link>
          </motion.div>
        )}
        <motion.div {...DEFAULT_MOTION({ delay: 0.4 })}>
          <Ticket {...{ ...user, name }} />
        </motion.div>
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
