import type { ReactChildren } from "react"
import Header from "./header"

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main
        className="w-[80rem] max-w-[80%] mx-auto sm:px-6 lg:px-8 mt-8 pb-40"
        style={{
          // header height
          marginTop: -96,
        }}
      >
        {children}
      </main>
    </>
  )
}
