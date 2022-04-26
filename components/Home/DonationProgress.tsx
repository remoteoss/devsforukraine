import "emoji-mart/css/emoji-mart.css"
import { balance } from "../../utils/types"
import { DonateButton } from "../Buttons/Donate"

import { H3, Label, MotionH2, MotionSubHeadlineLarge } from "../Typography"
import { NGOS } from "./NGO"
import { motion } from "framer-motion"
import { DEFAULT_MOTION, USDFormatter } from "../../utils/constants"
import { Reactions } from "@prisma/client"
import { EmojiPicker } from "./EmojiPicker"

type Props = {
  balance: balance["balance"]
  donations: balance["donations"]
  goal: balance["goal"]
  percentage: balance["percentage"]
  reactions: Reactions[]
}

export const DonationProgress = ({
  donations,
  balance,
  goal,
  percentage,
  reactions,
}: Props) => (
  <div className=" border-b-[1px] border-b-white border-solid border-opacity-20">
    <div className="text-center mt-[160px]" id="ngos">
      <MotionH2 {...DEFAULT_MOTION({})}>Charity Event</MotionH2>
    </div>
    <div className="mb-16 text-center mx-auto pt-4">
      <MotionSubHeadlineLarge
        {...DEFAULT_MOTION({})}
        className="mt-4 !text-devs-gray100 max-w-[560px] m-auto"
      >
        The <span className="text-white">funds raised</span> during the two days
        of the event will be evenly divided between{" "}
        <span className="text-white">
          8 Non-Governmental Organizations & Humanitarian funds
        </span>{" "}
        Remote is collaborating with:
      </MotionSubHeadlineLarge>
    </div>
    <NGOS />
    <motion.section
      {...DEFAULT_MOTION({})}
      className="sm:w-[650px] w-full my-[140px] bg-white bg-opacity-[0.05] p-12 pb-8 rounded-xl relative mx-auto"
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2">
        <DonateButton />
      </div>
      <div className="flex justify-between w-full mb-8 items-center">
        <Label className=" !text-devs-gray100  hidden sm:block">
          <H3 className="block pb-1">{donations}</H3> Donations
        </Label>
        <Label className=" !text-devs-gray100">
          <H3 className="block text-white sm:text-right pb-1">
            {USDFormatter.format(balance)}
          </H3>{" "}
          raised of {USDFormatter.format(goal)} goal
        </Label>
      </div>
      <div className="h-4 bg-devs-black w-full rounded-[100px]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: `calc(${percentage < 100 ? percentage : 100}% - 8px)`,
          }}
          className={`h-2 ml-1 relative top-1 rounded-[100px]`}
          style={{
            background: "linear-gradient(270deg, #2696FA 0%, #E7CD54 100%)",
          }}
        />{" "}
      </div>{" "}
      <EmojiPicker reactions={reactions} />
    </motion.section>
  </div>
)
