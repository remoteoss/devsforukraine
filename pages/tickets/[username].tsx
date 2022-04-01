import classNames from "classnames"
import { GetServerSideProps } from "next"
import { getSession, signIn } from "next-auth/react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { RegisterWithGithub } from "../../components/Buttons/RegisterGitHub"
import { GitHub, LinkIcon, TwitterIcon } from "../../components/Icons"
import Layout from "../../components/layout"
import { Ticket } from "../../components/Tickets"
import { getAbsoluteURL } from "../../utils/absoluteUrl"
import { Session, UserType } from "../../utils/types"

const RightSVG = () => (
  <svg
    width="324"
    height="900"
    viewBox="0 0 324 900"
    className="max-h-[90vh]"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.311439 882.878C2.57647 767.448 32.7581 648.899 120.868 560.71C176.978 504.315 248.53 465.842 326.476 450.156C248.525 434.484 176.969 396.009 120.868 339.601C36.8068 255.466 3.05782 142.445 0.198213 33.0811C0.198212 27.9219 9.94995e-07 22.7628 7.70718e-07 17.632L0 0L50.7651 -2.21901e-06C57.4469 -2.51108e-06 64.1288 0.141512 70.8106 0.48168C168.915 5.21568 267.784 44.5618 341.652 118.52C419.909 196.872 459.377 347.227 460 449.901L460 450.298C459.377 553.17 419.937 703.298 341.624 781.707C266.085 857.366 164.328 896.768 64.1571 900L0.31144 900L0.311439 882.878ZM313.707 139.355C313.707 139.639 313.707 139.355 313.707 139.355V139.355Z"
      fill="#1C1C1C"
    />
  </svg>
)

const LeftSVG = () => (
  <svg
    width="316"
    height="495"
    className="max-h-[90vh]"
    viewBox="0 0 316 495"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M312.46 583.746C290.514 507.834 249.549 434.808 175.647 392.12C128.542 364.781 74.3994 352.027 20.063 355.471C68.8479 331.294 109.362 293.176 136.478 245.94C177.176 175.418 179.478 94.7157 161.996 21.9058C161.082 18.4949 160.299 15.049 159.39 11.6569L156.267 0L122.688 8.99733C118.268 10.1816 113.874 11.4594 109.514 12.8686C45.4619 33.3858 -12.9646 76.9214 -48.7233 138.909C-86.6064 204.579 -86.0778 310.977 -68.3013 378.967L-68.231 379.23C-49.5954 447.131 3.08677 539.393 68.7771 577.351C132.145 613.983 206.432 621.998 273.263 606.381L315.493 595.065L312.46 583.746ZM-26.5483 147.731C-26.4981 147.918 -26.5483 147.731 -26.5483 147.731V147.731Z"
      fill="#1C1C1C"
    />
  </svg>
)

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
    <Layout noFooter>
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
      <div className="absolute left-0 bottom-0">
        <LeftSVG />
      </div>
      <div className="absolute right-0 top-0  max-h-[90vh]">
        <RightSVG />
      </div>
      <div className="flex flex-col items-center gap-8 mt-20 h-full">
        <div
          className={classNames(
            " max-w-full",
            isTicketHolder ? "w-[450px]" : "w-[610px]"
          )}
        >
          <h1 className="text-[40px] font-bold mb-6 text-center font-bossa">
            {isTicketHolder
              ? "Congratulations, you are registered!"
              : `${user.username} is attending DevsForUkraine!`}
          </h1>
          {isTicketHolder ? (
            <p className="text-devs-gray100 text-xl text-center font-light">
              We are delighted that you will be joining us for the
              DevsForUkraine event.
            </p>
          ) : (
            <p className="text-devs-gray100 text-center text-xl pt-4 font-light">
              DevsForUkraine is a free, online conference with the goal to raise
              funds and provide support to Ukraine.
            </p>
          )}
        </div>
        {isTicketHolder ? (
          <div className="flex gap-6 mb-12">
            <a
              href={`https://twitter.com/intent/tweet?url=https://devsforukraine.io/ticket/${user.username} I am going to devsforukraine!`}
              target="_blank"
              rel="noreferrer"
              className="bg-devs-gray200 px-4 py-2 rounded-md font-normal text-xs gap-2 items-center  flex hover:bg-devs-gray50
              transition-colors"
            >
              <TwitterIcon />
              Share on Twitter
            </a>
            <button
              onClick={async () =>
                // @ts-ignore
                await navigator.clipboard.writeText(window.location)
              }
              className="bg-devs-gray200 px-4 py-2 rounded-md font-normal text-xs gap-2 items-center hover:bg-devs-gray50
              transition-colors flex"
            >
              <LinkIcon />
              Copy link
            </button>
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
