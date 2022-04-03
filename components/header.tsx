import Link from "next/link"
import { useSession } from "next-auth/react"
import { Session } from "../utils/types"
import { Logo } from "./Logo"
import { DonateButton } from "./Buttons/Donate"
import { TicketButton } from "./Buttons/TicketButton"
import { RegisterWithGithub } from "./Buttons/RegisterGitHub"
import { motion } from "framer-motion"

const MOTION = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { delay: 0.5, duration: 0.5 },
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
      <div className="w-[80rem] max-w-[80%] mx-auto flex flex-row items-center justify-between">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        {/* <h2 className="font-bold text-center hidden sm:block">
          25 - 26 <br />
          <span className="font-semibold"> APRIL 2022</span>
        </h2> */}
        <div className="flex gap-3">
          <DonateButton />
          {session?.user?.username ? <TicketButton /> : <RegisterWithGithub />}
        </div>
      </div>
    </motion.header>
  )
}
