import { useEffect, useRef } from "react"
import { UserType } from "../utils/types"
import { GitHub } from "./Icons"
import { Logo } from "./Logo"

const TICKET_WIDTH = 554
const TICKET_HEIGHT = 219
const PERSPECTIVE = "900px"

const mouseUp = (el: HTMLElement) =>
  (el.style.transform = `perspective(${PERSPECTIVE}) rotateX(0) rotateY(0)`)

const mousedown = (el: HTMLElement) =>
  (el.style.transform = `perspective(${PERSPECTIVE})  rotateX(0) rotateY(0)`)
const mouseout = (el: HTMLElement) =>
  (el.style.transform = `perspective(${PERSPECTIVE})  rotateX(0) rotateY(0)`)

const TicketBG = () => {
  return (
    <svg
      width="554"
      height="219"
      viewBox="0 0 554 219"
      fill="none"
      className="relative inset-0 -z-[1]"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        boxShadow: "0 45px 100px rgba(0, 0, 0, 0.4)",
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M554 207C554 213.627 548.627 219 542 219L376 219C370.477 219 366.048 213.573 361.404 210.584C360.11 209.752 358.611 209.209 357 209.049L357 208.861L356.5 208.861L356 208.861L355.5 208.861L355 208.861L355 209.049C353.389 209.209 351.89 209.752 350.596 210.584C345.952 213.573 341.523 219 336 219L12 219C5.37259 219 2.34844e-07 213.627 5.24538e-07 207L9.04826e-06 12C9.33795e-06 5.37255 5.3726 -3.92401e-05 12 -3.89504e-05L336 -9.98593e-06C341.523 -9.49221e-06 345.952 5.42696 350.596 8.41552C351.89 9.24826 353.389 9.79065 355 9.95061L355 10.1388L355.5 10.1388L356 10.1388L356.5 10.1389L357 10.1389L357 9.95061C358.611 9.79065 360.11 9.24826 361.404 8.41552C366.048 5.42696 370.477 -8.4102e-06 376 -8.6476e-06L542 -1.57833e-05C548.627 -1.54936e-05 554 5.37257 554 12L554 207ZM356.5 204.806L357 204.806L357 200.75L356.5 200.75L356 200.75L355.5 200.75L355 200.75L355 204.806L355.5 204.806L356 204.806L356.5 204.806ZM356.5 196.695L357 196.695L357 192.639L356.5 192.639L356 192.639L355.5 192.639L355 192.639L355 196.694L355.5 196.694L356 196.695L356.5 196.695ZM356.5 188.583L357 188.583L357 184.528L356.5 184.528L356 184.528L355.5 184.528L355 184.528L355 188.583L355.5 188.583L356 188.583L356.5 188.583ZM356.5 180.472L357 180.472L357 176.417L356.5 176.417L356 176.417L355.5 176.417L355 176.417L355 180.472L355.5 180.472L356 180.472L356.5 180.472ZM356.5 172.361L357 172.361L357 168.306L356.5 168.306L356 168.306L355.5 168.306L355 168.306L355 172.361L355.5 172.361L356 172.361L356.5 172.361ZM356.5 164.25L357 164.25L357 160.194L356.5 160.194L356 160.194L355.5 160.194L355 160.194L355 164.25L355.5 164.25L356 164.25L356.5 164.25ZM356.5 156.139L357 156.139L357 152.083L356.5 152.083L356 152.083L355.5 152.083L355 152.083L355 156.139L355.5 156.139L356 156.139L356.5 156.139ZM356.5 148.028L357 148.028L357 143.972L356.5 143.972L356 143.972L355.5 143.972L355 143.972L355 148.028L355.5 148.028L356 148.028L356.5 148.028ZM356.5 139.917L357 139.917L357 135.861L356.5 135.861L356 135.861L355.5 135.861L355 135.861L355 139.917L355.5 139.917L356 139.917L356.5 139.917ZM356.5 131.806L357 131.806L357 127.75L356.5 127.75L356 127.75L355.5 127.75L355 127.75L355 131.806L355.5 131.806L356 131.806L356.5 131.806ZM356.5 123.694L357 123.694L357 119.639L356.5 119.639L356 119.639L355.5 119.639L355 119.639L355 123.694L355.5 123.694L356 123.694L356.5 123.694ZM356.5 115.583L357 115.583L357 111.528L356.5 111.528L356 111.528L355.5 111.528L355 111.528L355 115.583L355.5 115.583L356 115.583L356.5 115.583ZM356.5 107.472L357 107.472L357 103.417L356.5 103.417L356 103.417L355.5 103.417L355 103.417L355 107.472L355.5 107.472L356 107.472L356.5 107.472ZM356.5 99.3611L357 99.3611L357 95.3056L356.5 95.3056L356 95.3055L355.5 95.3055L355 95.3055L355 99.3611L355.5 99.3611L356 99.3611L356.5 99.3611ZM356.5 91.25L357 91.25L357 87.1945L356.5 87.1945L356 87.1944L355.5 87.1944L355 87.1944L355 91.25L355.5 91.25L356 91.25L356.5 91.25ZM356.5 83.1389L357 83.1389L357 79.0834L356.5 79.0834L356 79.0833L355.5 79.0833L355 79.0833L355 83.1388L355.5 83.1388L356 83.1388L356.5 83.1389ZM356.5 75.0278L357 75.0278L357 70.9722L356.5 70.9722L356 70.9722L355.5 70.9722L355 70.9722L355 75.0277L355.5 75.0277L356 75.0277L356.5 75.0278ZM356.5 66.9167L357 66.9167L357 62.8611L356.5 62.8611L356 62.8611L355.5 62.8611L355 62.8611L355 66.9166L355.5 66.9166L356 66.9166L356.5 66.9167ZM356.5 58.8056L357 58.8056L357 54.75L356.5 54.75L356 54.7499L355.5 54.7499L355 54.7499L355 58.8055L355.5 58.8055L356 58.8055L356.5 58.8056ZM356.5 50.6944L357 50.6944L357 46.6389L356.5 46.6389L356 46.6388L355.5 46.6388L355 46.6388L355 50.6944L355.5 50.6944L356 50.6944L356.5 50.6944ZM356.5 42.5833L357 42.5833L357 38.5278L356.5 38.5278L356 38.5277L355.5 38.5277L355 38.5277L355 42.5833L355.5 42.5833L356 42.5833L356.5 42.5833ZM356.5 34.4722L357 34.4722L357 30.4167L356.5 30.4167L356 30.4166L355.5 30.4166L355 30.4166L355 34.4722L355.5 34.4722L356 34.4722L356.5 34.4722ZM356.5 26.3611L357 26.3611L357 22.3056L356.5 22.3056L356 22.3055L355.5 22.3055L355 22.3055L355 26.361L355.5 26.361L356 26.361L356.5 26.3611ZM356.5 18.25L357 18.25L357 14.1944L356.5 14.1944L356 14.1944L355.5 14.1944L355 14.1944L355 18.2499L355.5 18.2499L356 18.2499L356.5 18.25Z"
        fill="white"
        fillOpacity="0.05"
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

export const Ticket = (user: UserType) => {
  const wrapper = useRef()

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

    const xVal = e.layerX || 0
    const yVal = e.layerY || 0
    const yRotation = 20 * ((xVal - TICKET_WIDTH / 2) / TICKET_WIDTH)
    const xRotation = -20 * ((yVal - TICKET_HEIGHT / 2) / TICKET_HEIGHT)

    el.style.transform = `perspective(${PERSPECTIVE}) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
  }

  return (
    <div
      className={`relative cursor-pointer m-auto flex justify-center lg:block`}
      style={{
        height: TICKET_HEIGHT,
        width: TICKET_WIDTH,
        maxWidth: "100%",
      }}
      // @ts-ignore

      ref={wrapper}
    >
      <div className="absolute scale-50 ticket">
        <div className="top-8 left-8 absolute w-[52%]">
          <div className="flex justify-between w-full items-center">
            <Logo width="99" />
            <span className="text-devs-gray100 underline">
              {" "}
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
        </div>
        <div className="right-[34px] absolute top-12">
          <div className="relative h-[64px] w-full right-[30px]">
            <img
              className="w-[64px] h-[64px] rounded-full absolute right-0"
              src={user.image}
              alt={user.username}
            />
            <AvatarBG />
          </div>
          <h2 className="font-bossa text-lg pt-4 block w-full">{user.name}</h2>
          <div className="flex items-center gap-2 text-xs justify-center">
            <GitHub TICKET_WIDTH={14} height={14} className="text-slate-500" />
            <a href={`https://github.com/${user.username}`}>
              <h6 className="text-slate-500">{user.username}</h6>
            </a>
          </div>
        </div>

        <TicketBG />
      </div>
    </div>
  )
}

const AvatarBG = () => (
  <svg
    className="absolute -top-[6px] -right-[6px]"
    width="76"
    height="76"
    viewBox="0 0 76 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38 76C58.9868 76 76 58.9868 76 38C76 17.0132 58.9868 0 38 0C17.0132 0 0 17.0132 0 38C0 58.9868 17.0132 76 38 76ZM38 74.1905C57.9875 74.1905 74.1905 57.9874 74.1905 38C74.1905 18.0125 57.9875 1.8095 38 1.8095C18.0126 1.8095 1.80956 18.0125 1.80956 38C1.80956 57.9874 18.0126 74.1905 38 74.1905Z"
      fill="url(#paint0_linear_116_2727)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_116_2727"
        x1="38"
        y1="0"
        x2="38"
        y2="74.449"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2696FA" />
        <stop offset="0.502604" stopColor="#2696FA" />
        <stop offset="0.502704" stopColor="#E7CD54" />
      </linearGradient>
    </defs>
  </svg>
)
