import type { ReactChildren } from "react"
import Header from "./header"

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-8">{children}</main>
    </>
  )
}
