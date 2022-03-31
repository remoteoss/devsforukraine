import Link from "next/link"
import { useSession } from "next-auth/react"
import { Session } from "../utils/types"
import { Logo } from "./Logo"
import { Heart, TicketIcon } from "./Icons"

export default function Header() {
  const { data: session, status } = useSession() as {
    data: Session
    status: string
  }

  return (
    <header className="py-8 sticky top-0 z-20">
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className="w-[80rem] max-w-[80%] mx-auto flex flex-row items-center justify-between">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <div className="flex gap-3">
          <Link href="/donate">
            <a className="bg-devs-yellow text-devs-black px-4 py-2 rounded-md font-normal text-xs flex gap-2 items-center">
              <Heart width="20" />
              Donate
            </a>
          </Link>
          {session?.user?.username && (
            <Link href={`/tickets/${session?.user?.username}`}>
              <a className="bg-devs-gray200 px-4 py-2 rounded-md font-normal text-xs gap-2 items-center hidden sm:flex">
                <TicketIcon />
                My ticket
              </a>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
