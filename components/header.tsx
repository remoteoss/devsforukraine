import Link from "next/link"
import { useSession } from "next-auth/react"
import { Session } from "../utils/types"
import { Logo } from "./Logo"
import { DonateButton } from "./Buttons/Donate"
import { TicketButton } from "./Buttons/TicketButton"
import { RegisterWithGitHub } from "./Buttons/RegisterGitHub"
import { motion } from "framer-motion"
import { ByRemoteIcon } from "./Icons"

const MOTION = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { delay: 0.1, duration: 0.8 },
}
export default function Header() {
  const { data: session } = useSession() as {
    data: Session
  }

  return (
    <motion.header {...MOTION} className="pt-8 sticky top-0 z-20 ">
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className="w-[80rem] max-w-[80%] mx-auto flex flex-row items-center justify-between  ">
        <Link href="/">
          <a
            className="flex gap-2 items-end justify-center sm:justify-start sm:w-auto w-[120px]"
            aria-label="Go back home"
          >
            <Logo />
            <div className="relative top-1 hidden sm:block">
              <ByRemoteIcon />
            </div>
          </a>
        </Link>
        <div className="flex gap-3 flex-wrap mt-0 justify-start">
          <DonateButton />
          {session?.user?.username ? <TicketButton /> : <RegisterWithGitHub />}
        </div>
      </div>
    </motion.header>
  )
}
