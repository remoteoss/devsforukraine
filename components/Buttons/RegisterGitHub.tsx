import { signIn } from "next-auth/react"
import { GitHub } from "../Icons"

export const RegisterWithGithub = () => (
  <button
    onClick={() => signIn("github")}
    className="bg-devs-gray200 px-4 py-2 rounded-md font-normal text-xs gap-2 items-center hidden sm:flex hover:bg-devs-gray50 transition-colors"
  >
    <GitHub width="20" />
    Register with Github
  </button>
)
