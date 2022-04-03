import { DEFAULT_MOTION, HEADER_HEIGHT } from "../../utils/constants"
import { HeartLogo } from "../Logo"
import { H1 } from "../Typography"
import { motion } from "framer-motion"

const MotionH1 = motion(H1)

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
        transition={{ duration: 2 }}
        style={{
          backgroundImage: `url("/hands.png")`,
        }}
        className="absolute w-screen h-screen inset-0 bg-cover bg-center bg-no-repeat -z-[1]"
      ></motion.div>
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
        <motion.h1
          className="text-3xl text-center mt-4 font-bossa"
          {...DEFAULT_MOTION}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          Devs For
          <MotionH1
            {...DEFAULT_MOTION}
            transition={{ delay: 0.25, duration: 0.3 }}
            className="mt-6 relative"
          >
            Ukraine
            <div className="absolute right-0 hidden sm:block translate-x-4 -translate-y-8 top-0">
              <HeartLogo />
            </div>
          </MotionH1>
        </motion.h1>
        <motion.h2
          {...DEFAULT_MOTION}
          transition={{ delay: 0.5 }}
          className="mt-8 text-devs-gray100 text-center max-w-[450px] mb-8 text-xl leading-8 font-light"
        >
          Supporting Ukraine through a free engineering Conference on{" "}
          <span className="text-devs-yellow">April 25 and 26, 2022</span>
        </motion.h2>
      </section>
      <motion.h3
        {...DEFAULT_MOTION}
        transition={{ delay: 0.6 }}
        className=" text-devs-gray100 text-center max-w-[550px] font-extralight text-2xl"
      >
        DevsForUkraine is a <span className="text-white underline">free</span>,
        <span className="text-white underline">online</span> engineering
        conference with the goal to{" "}
        <span className="text-white underline">raise funds</span> and provide
        support to Ukraine. 🇺🇦
      </motion.h3>
    </div>
  )
}
