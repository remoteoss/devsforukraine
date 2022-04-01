import Link from "next/link"
import { signIn, useSession } from "next-auth/react"
import { Session } from "../utils/types"
import { Logo } from "./Logo"
import { GitHub, Heart, TicketIcon } from "./Icons"

export default function Header() {
  const { data: session, status } = useSession() as {
    data: Session
    status: string
  }

  return (
    <header className="pt-8 sticky top-0 z-20 bg-devs-black">
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className="w-[80rem] max-w-[80%] mx-auto flex flex-row items-center justify-between">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <h2 className="font-bold text-center hidden sm:block">
          25 - 26 <br />
          <span className="font-semibold"> APRIL 2022</span>
        </h2>
        <div className="flex gap-3">
          <Link href={{ query: { modal: "donate" } }}>
            <a className="bg-devs-yellow text-devs-black px-4 py-2 rounded-md font-normal text-xs flex gap-2 items-center">
              <Heart width="20" />
              Donate
            </a>
          </Link>
          {session?.user?.username ? (
            <Link href={`/tickets/${session?.user?.username}`}>
              <a className="bg-devs-gray200 px-4 py-2 rounded-md font-normal text-xs gap-2 items-center hidden sm:flex">
                <TicketIcon />
                My ticket
              </a>
            </Link>
          ) : (
            <button
              onClick={() => signIn("github")}
              className="bg-devs-gray200 px-4 py-2 rounded-md font-normal text-xs gap-2 items-center hidden sm:flex"
            >
              <GitHub width="20" />
              Register with Github
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
