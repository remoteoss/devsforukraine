import { useRef } from "react"
import { UserType } from "../../utils/types"
import { Logo } from "./../Logo"
import { MobileTicketSVG } from "./MobileTicketBG"
import { TicketBG } from "./TicketSVG"
import { useListenerEvents } from "./useListenerEvents"
import { User } from "./User"
import { getNumber } from "./utils"

export const Ticket = (user: UserType) => {
  const wrapper = useRef()
  useListenerEvents({ wrapper })

  return (
    <div
      className={`relative cursor-pointer m-auto flex justify-center lg:block sm:h-[219px] h-[570px]`}
      style={{
        maxWidth: "100%",
      }}
      // @ts-ignore

      ref={wrapper}
    >
      <div className="absolute sm:scale-[0.6] ticket">
        <div className="top-8 left-8 absolute w-full sm:w-[52%]">
          <div className="flex justify-between w-full items-center">
            <Logo width="99" />
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

        <div className="right-[20px] absolute top-12 hidden sm:block">
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
