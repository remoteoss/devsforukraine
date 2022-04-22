import { DEFAULT_MOTION, HEADER_HEIGHT } from "../../utils/constants"
import { HeartLogo } from "../Logo"
import { MotionH1, MotionLabel, MotionSubHeadlineXL } from "../Typography"
import { motion } from "framer-motion"

const time = new Date("5/15/2022 4:00:00 PM UTC")
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
export const Hero = () => {
  return (
    <div
      className="flex items-center gap-4 justify-between flex-col"
      style={{
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `url("/hands.png")`,
        }}
        className="absolute w-screen h-screen inset-0 bg-cover bg-center bg-no-repeat -z-[1]"
      ></motion.div>

      <section className="flex flex-col justify-center h-full">
        <motion.h1
          className="text-3xl text-center mt-4 font-bossa"
          {...DEFAULT_MOTION({ delay: 0.4 })}
        >
          Devs For
          <MotionH1
            {...DEFAULT_MOTION({ delay: 0.6 })}
            className="mt-6 relative"
          >
            Ukraine
            <div className="absolute -right-12 hidden sm:block -translate-y-8 top-0">
              <HeartLogo />
            </div>
          </MotionH1>
        </motion.h1>
        <MotionLabel
          {...DEFAULT_MOTION({ delay: 0.8 })}
          className="my-14 !text-devs-gray100 text-center uppercase font-medium !text-[14px]"
        >
          <span className="text-devs-yellow">April 25</span> &{" "}
          <span className="text-devs-yellow">26</span>, 2022{" "}
          <span className="px-2">-</span>{" "}
          <button className="has-tooltip relative">
            4 PM UTC
            <span className="tooltip -mt-12 -left-4 bg-devs-gray400 !text-white text-[11px] p-2 rounded-md min-w-[100px]">
              {time.toLocaleTimeString()} in {timezone}
            </span>
          </button>{" "}
          <span className="px-2">-</span>{" "}
          <a
            href="https://www.twitch.tv/devsforukraine"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            Livestream
          </a>
        </MotionLabel>
      </section>
      <MotionSubHeadlineXL
        {...DEFAULT_MOTION({ delay: 1 })}
        className="text-center !text-devs-gray100 max-w-[550px]"
      >
        Devs For Ukraine is a <span className="text-white">free</span>,
        <span className="text-white"> online</span> engineering conference with
        the goal to <span className="text-white">raise funds</span> and provide
        support to Ukraine. 🇺🇦
      </MotionSubHeadlineXL>
    </div>
  )
}
