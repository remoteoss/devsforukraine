import Link from "next/link"
import { balance } from "../../utils/types"
import { Heart } from "../Icons"

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
  <div className="mt-40 w-full flex flex-col items-center bg-devs-gray400 py-40 px-12 rounded-xl">
    <div className="mb-16 text-center">
      <span className={"text-devs-blue mb-4 block"}>Donations</span>
      <h6 className="font-semibold text-4xl">Help Ukraine</h6>
      <span className="text-devs-gray100 block mt-4">
        Any donation towards Ukraine can have a consequent impact. Please
        consider helping those in need.
      </span>
      <Link href="/donate">
        <a className="mt-8 bg-devs-yellow text-devs-black px-4 py-2 rounded-md font-normal text-xs inline-flex gap-2 items-center">
          <Heart width="20" />
          Donate
        </a>
      </Link>
    </div>

    <div className="h-4 bg-devs-black w-full rounded-[100px]">
      <div
        className={`h-2 relative top-1 rounded-[100px]`}
        style={{
          background: "linear-gradient(270deg, #2696FA 0%, #E7CD54 100%)",
          width: `${percentage}%`,
        }}
      />
    </div>
    <div className="flex justify-between w-full mt-8 items-center">
      <span className="font-mono text-devs-gray100  hidden sm:block">
        <span className="block text-white font-sans text-4xl font-bold ">
          {donations}
        </span>{" "}
        Donations
      </span>
      <span className="font-mono text-devs-gray100">
        <span className="block text-white font-sans text-4xl font-bold sm:text-right">
          {formatter.format(balance)}
        </span>{" "}
        raised of {formatter.format(goal)} goal
      </span>
    </div>
  </div>
)
