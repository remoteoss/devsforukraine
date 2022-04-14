import classNames from "classnames"

import { Label, StatsHeader } from "../Typography"
import { motion } from "framer-motion"
import { DEFAULT_MOTION, GOAL } from "../../utils/constants"

const info = [
  {
    top: 9,
    bottom: "Front-End Speakers",
  },
  {
    top: Intl.NumberFormat("en", { notation: "compact" }).format(GOAL),
    bottom: "Donation goal",
  },
  {
    top: 8,
    bottom: "Back-End Speakers",
  },
]

export const Info = () => (
  <div className="flex items-center gap-4 min-h-screen flex-col mt-[160px] relative ">
    <div className="sm:flex items-center pb-[160px] border-b-[1px] border-b-white border-solid border-opacity-20 relative w-full justify-center">
      {info.map((item, index) => (
        <motion.div
          key={index}
          {...DEFAULT_MOTION({ delay: index * 0.01 })}
          className={classNames("relative")}
        >
          <div
            className={classNames(
              index !== info.length - 1 &&
                "sm:after:block after:hidden after:w-[1px] after:h-10 after:bg-white after:absolute after:right-0 after:bg-opacity-20",
              "flex flex-col text-center mb-6 sm:mb-0 after:top-1/2 after:-translate-y-5 ",
              index !== info.length - 1 && "sm:pr-16",
              index !== 0 && "sm:ml-16"
            )}
          >
            <StatsHeader>{item.top}</StatsHeader>
            <Label
              className={classNames(
                index === 1 ? "!text-devs-yellow" : "!text-devs-blue"
              )}
            >
              {item.bottom}
            </Label>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
)
