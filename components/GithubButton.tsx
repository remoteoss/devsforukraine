import { signIn, useSession } from "next-auth/react"
import { Session } from "../utils/types"
import { GitHub } from "./Icons"
const classes =
  "px-4 h-[40px] rounded-md font-normal text-xs flex gap-2 items-center relative gh-button"
export const RegisterWithGhButton = () => {
  const { data: session, status } = useSession() as {
    data: Session
    status: string
  }

  const isLoading = status === "loading"
  if (isLoading) return null

  return !session ? (
    <button onClick={() => signIn("github")} className={classes}>
      <div className="absolute left-0 top-0">
        <SVGStroke />
      </div>
      <GitHub width="20" />
      Register now with Github
    </button>
  ) : (
    <p className="text-sm text-devs-gray100">
      Welcome back{" "}
      <span className="font-mono text-devs-yellow">
        {session.user?.username}
      </span>
    </p>
  )
}

const SVGStroke = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="203"
    height="40"
    fill="none"
    viewBox="0 0 203 40"
  >
    <rect
      width="201.5"
      height="38.5"
      x="0.75"
      y="0.75"
      stroke="url(#paint0_linear_16_387)"
      strokeWidth="1.5"
      rx="5.25"
    ></rect>
    <defs>
      <linearGradient
        id="paint0_linear_16_387"
        x1="101.5"
        x2="101.5"
        y1="0"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2797FA"></stop>
        <stop offset="0.49" stopColor="#2797FA"></stop>
        <stop offset="0.49" stopColor="#E7CD54"></stop>
      </linearGradient>
    </defs>
  </svg>
)
