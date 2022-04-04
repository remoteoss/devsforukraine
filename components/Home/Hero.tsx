import { DEFAULT_MOTION, HEADER_HEIGHT } from "../../utils/constants"
import { HeartLogo } from "../Logo"
import {
  MotionH1,
  MotionSubHeadlineLarge,
  MotionSubHeadlineXL,
} from "../Typography"
import { motion } from "framer-motion"

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
        transition={{ duration: 2, delay: 0.8 }}
        style={{
          backgroundImage: `url("/hands.png")`,
        }}
        className="absolute w-screen h-screen inset-0 bg-cover bg-center bg-no-repeat -z-[1]"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="font-bossa text-devs-gray100 absolute bottom-0 -left-2 hidden  rotate-[270deg] sm:flex items-center -translate-y-[130px] -translate-x-1/3 text-[12px]"
        style={{
          letterSpacing: "0.1em",
        }}
      >
        <div className="w-[100px] h-[1px] bg-devs-gray100 mr-6" />
        <span className="block">APRIL 25 - 26, 2022</span>
      </motion.div>

      <section className="flex flex-col justify-center h-full">
        <motion.p
          className="text-center text-devs-blue font-bold pb-4"
          {...DEFAULT_MOTION()}
        >
          25 - 26
          <span className="block text-center m-auto text-devs-yellow">
            APRIL 2022
          </span>
        </motion.p>
        <motion.h1
          className="text-3xl text-center mt-4 font-bossa"
          {...DEFAULT_MOTION()}
        >
          Devs For
          <MotionH1 {...DEFAULT_MOTION()} className="mt-6 relative">
            Ukraine
            <div className="absolute right-8 hidden sm:block -translate-y-8 top-0">
              <HeartLogo />
            </div>
          </MotionH1>
        </motion.h1>
        <MotionSubHeadlineLarge
          {...DEFAULT_MOTION()}
          className="my-10 !text-devs-gray100"
        >
          A free, online charity conference in support of Ukraine.
        </MotionSubHeadlineLarge>
      </section>
      <MotionSubHeadlineXL
        {...DEFAULT_MOTION()}
        className="text-center !text-devs-gray100 max-w-[550px]"
      >
        DevsForUkraine is a <span className="text-white underline">free</span>,
        <span className="text-white underline">online</span> engineering
        conference with the goal to{" "}
        <span className="text-white underline">raise funds</span> and provide
        support to Ukraine. 🇺🇦
      </MotionSubHeadlineXL>
    </div>
  )
}
