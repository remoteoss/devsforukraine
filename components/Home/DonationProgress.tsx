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
  <>
    <div className="mb-16 text-center">
      <span className="text-devs-gray100 block mt-4 font-light max-w-[500px]">
        The <span className="text-white">funds raised</span> during the two days
        of the event will be evenly divided between{" "}
        <span className="text-white">7 Non-Governmental Organizations</span>{" "}
        Remote is collaborating with:
      </span>
    </div>

    <section className="w-[650px] my-[140px] bg-white bg-opacity-[0.05] p-12 rounded-xl relative">
      <Link href={{ query: { modal: "donate" } }}>
        <a className="bg-devs-yellow text-devs-black px-4 py-2 rounded-md font-normal text-xs inline-flex gap-2 items-center absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2">
          <Heart width="20" />
          Donate
        </a>
      </Link>
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
      <div className="h-4 bg-devs-black w-full rounded-[100px]">
        <div
          className={`h-2 relative top-1 rounded-[100px]`}
          style={{
            background: "linear-gradient(270deg, #2696FA 0%, #E7CD54 100%)",
            width: `${percentage}%`,
          }}
        />
      </div>
    </section>

    <ul className="flex items-center justify-center gap-14 mb-10">
      <li>
        <img src="/orgs/ComeBackAlive.png" alt="ComeBackAlive" width="135" />
      </li>
      <li>
        <img src="/orgs/ua-red.png" alt="UA red cross" width="60" />
      </li>

      <li>
        <img src="/orgs/PAH.png" alt="PAH" width="109" />
      </li>
      <li>
        <img src="/orgs/PCK.png" alt="Polish Red Cross" width="60" />
      </li>
    </ul>
    <ul className="flex items-center justify-center gap-14  mb-40">
      <li>
        <img src="/orgs/insight-org.png" alt="insight" width="161" />
      </li>
      <li>
        <img src="/orgs/children.png" alt="Voices of Children" width="61" />
      </li>
      <li>
        <img src="/orgs/razom.png" alt="Voices of Children" width="144" />
      </li>
    </ul>
  </>
)
