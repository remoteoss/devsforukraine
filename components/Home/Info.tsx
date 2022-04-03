import classNames from "classnames"
import { Fragment } from "react"
import { balance } from "../../utils/types"
import { H2 } from "../Typography"
import { DonationProgress } from "./DonationProgress"
import { motion } from "framer-motion"
import { DEFAULT_MOTION } from "../../utils/constants"
type Props = { balance: balance }

const info = [
  {
    top: 8,
    bottom: "Speakers Front End",
  },
  {
    top: "15K",
    bottom: "Donation goal",
  },
  {
    top: 8,
    bottom: "Back End Speakers",
  },
]

export const Info = ({ balance }: Props) => (
  <div className="flex items-center gap-4 min-h-screen flex-col mt-[160px]  ">
    <motion.div className="sm:flex items-center pb-[160px] border-b-[1px] border-b-white border-solid border-opacity-20">
      {info.map((item, index) => (
        <motion.div key={index} {...DEFAULT_MOTION({ delay: index * 0.1 })}>
          <div
            className={classNames(
              "flex flex-col text-center mb-6 sm:mb-0",
              index !== info.length - 1 && "sm:pr-16",
              index !== 0 && "sm:ml-16"
            )}
          >
            <span className="font-bold text-[64px] font-bossa">{item.top}</span>
            <span
              className={classNames(
                index === 1 ? "text-devs-yellow" : "text-devs-blue"
              )}
            >
              {item.bottom}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
    <DonationProgress {...balance} />
  </div>
)
