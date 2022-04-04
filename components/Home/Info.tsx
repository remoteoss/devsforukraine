import classNames from "classnames"

import { balance } from "../../utils/types"
import { Label, StatsHeader } from "../Typography"
import { DonationProgress } from "./DonationProgress"
import { motion } from "framer-motion"
import { DEFAULT_MOTION } from "../../utils/constants"
type Props = { balance: balance }

const info = [
  {
    top: 8,
    bottom: "Front End Speakers",
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
  <div className="flex items-center gap-4 min-h-screen flex-col mt-[160px]  border-b-[1px] border-b-white border-solid border-opacity-20">
    <div className="sm:flex items-center pb-[160px] border-b-[1px] border-b-white border-solid border-opacity-20">
      {info.map((item, index) => (
        <motion.div
          key={index}
          {...DEFAULT_MOTION({ delay: index * 0.01 })}
          className={classNames(
            index !== info.length - 1 && "border-r-[1px]",
            "border-r-white border-solid border-opacity-20"
          )}
        >
          <div
            className={classNames(
              "flex flex-col text-center mb-6 sm:mb-0",
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
    <DonationProgress {...balance} />
  </div>
)
