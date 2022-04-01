import Link from "next/link"
import { ByRemoteIcon } from "./Icons"
import { Logo } from "./Logo"

export const Footer = () => (
  <footer className=" py-5 border-t-[1px] text-sm border-white border-opacity-10">
    <div className="w-[80rem] max-w-[90%] mx-auto flex justify-between items-center">
      <div className="flex gap-2 items-end">
        <Logo />
        <ByRemoteIcon />
      </div>
      <h6 className="font-bold text-center hidden sm:block">
        25 - 26 <br />
        <span className="font-semibold"> APRIL 2022</span>
      </h6>
      <Link href="/code-of-conduct">
        <a className="underline text-devs-gray100">📕 Code of Conduct</a>
      </Link>
    </div>
  </footer>
)
