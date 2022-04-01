import { HEADER_HEIGHT } from "../../utils/constants"
import { HeartLogo } from "../Logo"

export const Hero = () => {
  return (
    <div
      className="flex items-center gap-4 justify-between flex-col"
      style={{
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
      }}
    >
      <div
        style={{
          backgroundImage: `url("/hands.png")`,
        }}
        className="absolute w-screen h-screen inset-0 bg-cover bg-center bg-no-repeat -z-[1]"
      ></div>
      <div
        className="font-bossa text-white opacity-30 absolute bottom-0 -left-2 hidden  rotate-[270deg] sm:flex items-center -translate-y-[160px] -translate-x-1/3"
        style={{
          letterSpacing: "0.1em",
        }}
      >
        <div className="w-[100px] h-[1px] bg-white mr-6" />
        <span className="block">APRIL 25 - 26, 2022</span>
      </div>

      <section className="flex flex-col justify-center h-full">
        <h1 className="text-3xl text-center mt-4 font-bossa ">
          Devs For
          <span className="block text-[88px] mt-6 font-extrabold relative">
            Ukraine
            <div className="absolute right-0 translate-x-4 -translate-y-8 top-0">
              <HeartLogo />
            </div>
          </span>
        </h1>
        <h2 className="mt-8 text-devs-gray100 text-center max-w-[450px] mb-8 text-xl leading-8">
          Supporting Ukraine through a free engineering Conference on April 25
          and 26, 2022
        </h2>
      </section>
      <h3 className="font-bossa text-devs-gray100 text-center max-w-[550px] font-light text-2xl">
        DevsForUkraine is a <span className="text-white underline">free</span>,
        <span className="text-white underline">online</span> engineering
        conference with the goal to{" "}
        <span className="text-white underline">raise funds</span> and provide
        support to Ukraine. 🇺🇦
      </h3>
    </div>
  )
}
