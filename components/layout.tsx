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
        className="w-[80rem] max-w-[90%] mx-auto sm:px-6 lg:px-8 pb-40"
        style={{
          // header height
          marginTop: -HEADER_HEIGHT,
          paddingTop: HEADER_HEIGHT,
        }}
      >
        {children}
      </main>
    </>
  )
}
