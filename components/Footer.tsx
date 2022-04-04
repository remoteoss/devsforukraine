import Link from "next/link"
import { ByRemoteIcon } from "./Icons"
import { Logo } from "./Logo"
import { Label } from "./Typography"

export const Footer = () => (
  <footer className="flex items-center border-t-[1px] text-sm border-white border-opacity-10 h-[120px]">
    <div className="w-[80rem] max-w-[90%] mx-auto flex justify-between items-center">
      <div className="flex gap-2 items-end">
        <Logo />
        <div className="relative top-1">
          <ByRemoteIcon />
        </div>
      </div>
      <Label className="font-bold text-center hidden sm:block">
        25 - 26
        <span className="font-semibold"> APRIL 2022</span>
      </Label>
      <Link href="/code-of-conduct">
        <a className="underline text-devs-gray100">📕 Code of Conduct</a>
      </Link>
    </div>
  </footer>
)
