import classNames from "classnames"
import { signIn } from "next-auth/react"
import { GitHub } from "../Icons"

export const RegisterWithGitHub = ({
  className,
  options = {},
}: {
  className?: string
  options?: any
}) => (
  <button
    onClick={() => signIn("github", options)}
    className={classNames(
      "bg-devs-gray200 px-4 py-2 rounded-md font-normal text-xs gap-2 items-center flex hover:bg-devs-gray50 transition-colors h-10",
      className
    )}
  >
    <GitHub width="20" />
    <span className="hidden sm:inline">Register with GitHub</span>
  </button>
)
