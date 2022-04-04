import { useEffect, useRef } from "react"
import { UserType } from "../../utils/types"
import { MobileTicketSVG } from "./MobileTicketBG"
import { TicketBG, TicketLogoSVG } from "./TicketSVG"
import VanillaTilt from "vanilla-tilt"
import { User } from "./User"
import { getNumber } from "./utils"

export const Ticket = (user: UserType) => {
  const wrapper = useRef()
  useEffect(() => {
    if (wrapper.current) {
      VanillaTilt.init(wrapper?.current, { scale: 1.04 })
    }
  }, [])

  return (
    <div
      className={`relative cursor-pointer m-auto  lg:block sm:h-[219px] h-[570px] w-full sm:ml-[-277px] ml-[-163px]`}
      style={{
        maxWidth: "100%",
        paddingLeft: "50%",
      }}
    >
      <div
        className="transform absolute ticket" // @ts-ignore
        ref={wrapper}
      >
        <div className="top-8 left-8 absolute w-full sm:w-[52%]">
          <div className="flex justify-between w-full items-center">
            <TicketLogoSVG />

            <span className="text-devs-gray100 underline hidden sm:block">
              Nº{getNumber(user.registrationNumber)}
            </span>
          </div>
          <div className="mt-10 flex flex-col">
            <span className="text-devs-yellow text-xs mb-2 block">
              April 25 - 26, 2022
            </span>
            <span className="text-xl font-bossa">
              Online Front-end &<br /> Back-end Conference
            </span>
          </div>
          <span className="text-devs-gray100 underline block sm:hidden mt-24">
            {" "}
            Nº{getNumber(user.registrationNumber)}
          </span>
        </div>

        <div
          className="right-0 w-[35%] flex-col absolute top-12 hidden sm:block"
          style={{ transform: "translateZ(20px)" }}
        >
          <User user={user} />
        </div>

        <TicketBG />
        <MobileTicketSVG />
        <div className="bottom-12 left-1/2 -translate-x-1/2 absolute sm:hidden block w-full flex-col items-center justify-center">
          <User user={user} />
        </div>
      </div>
    </div>
  )
}
