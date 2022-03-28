import { useEffect, useRef } from "react"
import { UserType } from "../utils/types"
import { GitHub } from "./Icons"

const TICKET_WIDTH = 654
const TICKET_HEIGHT = 351

const TicketBG = ({ bg }: { bg: string }) => {
  return (
    <svg
      width={TICKET_WIDTH}
      height={TICKET_HEIGHT}
      viewBox={`0 0 ${TICKET_WIDTH} ${TICKET_HEIGHT}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_2_6304" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M604 351H50C50 323.386 27.6142 301 0 301V50C27.6142 50 50 27.6142 50 0H604C604 27.6142 626.386 50 654 50V301C626.386 301 604 323.386 604 351Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M604 351H50C50 323.386 27.6142 301 0 301V50C27.6142 50 50 27.6142 50 0H604C604 27.6142 626.386 50 654 50V301C626.386 301 604 323.386 604 351Z"
        fill="#212134"
      />
      <path
        d="M50 351H44V357H50V351ZM604 351V357H610V351H604ZM0 301H-6V307H0V301ZM0 50V44H-6V50H0ZM50 0V-6H44V0H50ZM604 0H610V-6H604V0ZM654 50H660V44H654V50ZM654 301V307H660V301H654ZM50 357H604V345H50V357ZM0 307C24.3005 307 44 326.699 44 351H56C56 320.072 30.9279 295 0 295V307ZM-6 50V301H6V50H-6ZM44 0C44 24.3005 24.3005 44 0 44V56C30.9279 56 56 30.9279 56 0H44ZM604 -6H50V6H604V-6ZM654 44C629.699 44 610 24.3005 610 0H598C598 30.9279 623.072 56 654 56V44ZM660 301V50H648V301H660ZM610 351C610 326.699 629.699 307 654 307V295C623.072 295 598 320.072 598 351H610Z"
        fill={bg}
        mask="url(#path-1-inside-1_2_6304)"
      />
      <path
        d="M502 6V345"
        stroke="#4A4A6A"
        strokeWidth="3"
        strokeDasharray="6 6"
      />
    </svg>
  )
}

const getNumber = (number: number) => {
  if (number < 10) {
    return `000${number}`
  } else if (number < 100) {
    return `00${number}`
  } else if (number < 1000) {
    return `0${number}`
  } else {
    return `${number}`
  }
}

const PERSPECTIVE = "900px"
const SCALE = 1.01

export const Ticket = (user: UserType) => {
  const bg = user.name.split("")[0].toLowerCase() > "M" ? "#FFDD00" : "#0057B7"
  const wrapper = useRef()

  const mouseUp = (el: HTMLElement) =>
    (el.style.transform = `perspective(${PERSPECTIVE}) scale(${SCALE}) rotateX(0) rotateY(0)`)

  const mousedown = (el: HTMLElement) =>
    (el.style.transform = `perspective(${PERSPECTIVE}) scale(0.99px) rotateX(0) rotateY(0)`)
  const mouseout = (el: HTMLElement) =>
    (el.style.transform = `perspective(${PERSPECTIVE}) scale(1) rotateX(0) rotateY(0)`)

  useEffect(() => {
    const el = wrapper.current as unknown as HTMLElement
    if (wrapper.current) {
      el.addEventListener("mouseup", () => mouseUp(el))
      el.addEventListener("mousedown", () => mousedown(el))
      el.addEventListener("mouseout", () => mouseout(el))
      el.addEventListener("mousemove", handleMove)
    }

    return () => {
      el.removeEventListener("mouseup", () => mouseUp(el))
      el.removeEventListener("mousedown", () => mousedown(el))
      el.removeEventListener("mouseout", () => mouseout(el))
      el.removeEventListener("mousemove", handleMove)
    }
  })

  function handleMove(e: MouseEvent & { layerX?: number; layerY?: number }) {
    const el = wrapper.current as unknown as HTMLElement

    /* Store the x position */
    const xVal = e.layerX || 0
    /* Store the y position */
    const yVal = e.layerY || 0
    const yRotation = 20 * ((xVal - TICKET_WIDTH / 2) / TICKET_WIDTH)
    const xRotation = -20 * ((yVal - TICKET_HEIGHT / 2) / TICKET_HEIGHT)

    const string = `perspective(${PERSPECTIVE}) scale(${SCALE}) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
    el.style.transform = string
  }

  return (
    <div
      className={`relative h-[${TICKET_HEIGHT}px] w-[${TICKET_WIDTH}px] cursor-pointer m-auto`}
      // @ts-ignore
      ref={wrapper}
    >
      <div className="absolute">
        <div className="top-7 absolute left-12 w-[420px] flex flex-col justify-center align-center pb-[60px]">
          <div className="flex align-center">
            <img
              className="w-[92px] h-[92px] rounded-full border-4 border-slate-700 mr-4"
              src={user.image}
              alt={user.username}
            />
            <div className="flex flex-col justify-center">
              <h2 className="font-semibold text-2xl pb-2">{user.name}</h2>
              <div className="flex items-center gap-2">
                <GitHub
                  TICKET_WIDTH={24}
                  height={24}
                  className="text-slate-500"
                />
                <a href={`https://github.com/${user.username}`}>
                  <h6 className="text-slate-500">{user.username}</h6>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-12 uppercase text-slate-500 font-semibold text-lg">
            <h2>CONF NAME</h2>
            <p className="">25 & 26 APRIL 2022</p>
          </div>
          <a
            href="https://devsforukraine.com"
            className="text-slate-600 text-sm mt-2 font-semibold underline"
          >
            devsforukraine.com
          </a>
        </div>
        <div className="top-20 absolute right-10 w-[90px] transform rotate-90 text-6xl font-bold">
          Nº{getNumber(user.registrationNumber)}
        </div>
        <TicketBG bg={bg} />
      </div>
    </div>
  )
}
