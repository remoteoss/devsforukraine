import { balance } from "../../utils/types"
import { DonateButton } from "../Buttons/Donate"

import { H2, H4, MotionH2, MotionH4 } from "../Typography"
import { NGOS } from "./NGO"
import { motion } from "framer-motion"
import { DEFAULT_MOTION } from "../../utils/constants"

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
})

type Props = {
  balance: balance["balance"]
  donations: balance["donations"]
  goal: balance["goal"]
  percentage: balance["percentage"]
}

export const DonationProgress = ({
  donations,
  balance,
  goal,
  percentage,
}: Props) => (
  <>
    <div className="mt-28">
      <MotionH2 {...DEFAULT_MOTION({})}>Charity Event</MotionH2>
    </div>
    <div className="mb-16 text-center">
      <MotionH4 {...DEFAULT_MOTION({})} className="mt-4">
        The <span className="text-white">funds raised</span> during the two days
        of the event will be evenly divided between{" "}
        <span className="text-white">7 Non-Governmental Organizations</span>{" "}
        Remote is collaborating with:
      </MotionH4>
    </div>
    <NGOS />
    <section className="w-[650px] max-w-full my-[140px] bg-white bg-opacity-[0.05] p-12 rounded-xl relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2">
        <DonateButton />
      </div>
      <div className="flex justify-between w-full mb-8 items-center">
        <span className=" text-devs-gray100  hidden sm:block">
          <span className="block text-white text-4xl font-bossa pb-1">
            {donations}
          </span>{" "}
          Donations
        </span>
        <span className=" text-devs-gray100">
          <span className="block text-white text-4xl font-bossa sm:text-right pb-1">
            {formatter.format(balance)}
          </span>{" "}
          raised of {formatter.format(goal)} goal
        </span>
      </div>
      <div id="ngos" className="h-4 bg-devs-black w-full rounded-[100px]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage < 100 ? percentage : 100}%` }}
          transition={{ delay: 0.2 }}
          className={`h-2 relative top-1 rounded-[100px]`}
          style={{
            background: "linear-gradient(270deg, #2696FA 0%, #E7CD54 100%)",
          }}
        />
      </div>
    </section>
  </>
)
