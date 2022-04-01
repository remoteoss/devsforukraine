import Link from "next/link"
import type { ReactChildren } from "react"
import { HEADER_HEIGHT } from "../utils/constants"
import Header from "./header"

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main
        className="w-[80rem] max-w-[90%] mx-auto sm:px-6 lg:px-8 pb-20"
        style={{
          // header height
          marginTop: -HEADER_HEIGHT,
          paddingTop: HEADER_HEIGHT,
          minHeight: "calc(100vh - " + HEADER_HEIGHT + "px)",
        }}
      >
        {children}
      </main>
      <footer className=" py-5 border-t-[1px] text-sm border-devs-gray100">
        <div className="w-[80rem] max-w-[90%] mx-auto flex justify-between">
          <p>#DevsForUkraine</p>
          <Link href="/code-of-conduct">
            <a className="underline text-devs-gray100">Code of Conduct</a>
          </Link>
        </div>
      </footer>
    </>
  )
}
