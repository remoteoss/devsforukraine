import classNames from "classnames"
import { HEADER_HEIGHT } from "../utils/constants"
import { LeftSVG, RightSVG } from "./BGSvg"
import { Footer } from "./Footer"
import Header from "./header"

interface Props {
  children: React.ReactNode
  noFooter?: boolean
  withBG?: boolean
  center?: boolean
}

export default function Layout({ children, noFooter, withBG, center }: Props) {
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
        className={classNames(
          "w-[80rem] max-w-[90%] mx-auto sm:px-6 lg:px-8 main h-full-no-header !min-h-screen",
          center && "flex flex-col justify-center"
        )}
      >
        {children}
      </main>
      {!noFooter && <Footer />}
    </>
  )
}
