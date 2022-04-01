import Link from "next/link"
import { HEADER_HEIGHT } from "../utils/constants"
import { Footer } from "./Footer"
import Header from "./header"

interface Props {
  children: React.ReactNode
  noFooter?: boolean
}

export default function Layout({ children, noFooter }: Props) {
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
      {!noFooter && <Footer />}
    </>
  )
}
