import Link from "next/link"
import { HEADER_HEIGHT } from "../utils/constants"
import { RightSVG } from "./BGSvg"
import { LeftSVG } from "./DonateModal"
import { Footer } from "./Footer"
import Header from "./header"

interface Props {
  children: React.ReactNode
  noFooter?: boolean
  withBG?: boolean
}

export default function Layout({ children, noFooter, withBG }: Props) {
  return (
    <>
      {withBG && (
        <>
          <div className="fixed left-0 bottom-0 -z-1">
            <LeftSVG />
          </div>
          <div className="fixed right-0 top-0 -z-1 max-h-[90vh]">
            <RightSVG />
          </div>
        </>
      )}
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
