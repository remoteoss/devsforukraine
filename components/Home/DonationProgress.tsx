import { balance } from "../../utils/types"

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
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
  <div className="mt-40 w-full flex flex-col items-center">
    <div
      className="h-[1px] w-[173px] mb-40"
      style={{
        background: "rgba(255, 255, 255, 0.24)",
      }}
    ></div>
    <div className="flex justify-between w-full mb-8 items-center">
      <span className="font-mono text-devs-gray100  hidden sm:block">
        <span className="block text-white font-sans text-2xl font-bold">
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
    <div className="h-2 bg-devs-gray300 w-full rounded-[100px]">
      <div
        className={`h-full rounded-[100px]`}
        style={{
          background: "linear-gradient(270deg, #2696FA 0%, #E7CD54 100%)",
          width: `${percentage}%`,
        }}
      />
    </div>
  </div>
)
