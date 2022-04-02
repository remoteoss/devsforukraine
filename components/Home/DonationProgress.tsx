import Link from "next/link"
import { balance } from "../../utils/types"
import { DonateButton } from "../Buttons/Donate"
import { Heart } from "../Icons"
import { H4, MutedP } from "../Typography"
import { NGOS } from "./NGO"

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
    <div className="mb-16 text-center">
      <H4 className="mt-4">
        The <span className="text-white">funds raised</span> during the two days
        of the event will be evenly divided between{" "}
        <span className="text-white">7 Non-Governmental Organizations</span>{" "}
        Remote is collaborating with:
      </H4>
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
        <div
          className={`h-2 relative top-1 rounded-[100px]`}
          style={{
            background: "linear-gradient(270deg, #2696FA 0%, #E7CD54 100%)",
            width: `${percentage}%`,
          }}
        />
      </div>
    </section>
  </>
)
