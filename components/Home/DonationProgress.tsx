import Link from "next/link"
import { balance } from "../../utils/types"
import { DonateButton } from "../Buttons/Donate"
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
      <span className="text-devs-gray100 block mt-4 font-light max-w-[500px] text-xl">
        The <span className="text-white">funds raised</span> during the two days
        of the event will be evenly divided between{" "}
        <span className="text-white">7 Non-Governmental Organizations</span>{" "}
        Remote is collaborating with:
      </span>
    </div>

    <section className="w-[650px] my-[140px] bg-white bg-opacity-[0.05] p-12 rounded-xl relative">
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

    <ul className="flex items-center justify-center gap-14 mb-10">
      <li>
        <a
          href="https://www.comebackalive.in.ua/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="opacity-40 transition hover:opacity-100"
            src="/orgs/ComeBackAlive.png"
            alt="ComeBackAlive"
            width="135"
          />
        </a>
      </li>
      <li>
        <a href="https://redcross.org.ua/" target="_blank" rel="noreferrer">
          <img
            className="opacity-40 transition hover:opacity-100"
            src="/orgs/ua-red.png"
            alt="UA red cross"
            width="60"
          />
        </a>
      </li>

      <li>
        <a
          href="https://www.pah.org.pl/sos-ukraina/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="opacity-40 transition hover:opacity-100"
            src="/orgs/PAH.png"
            alt="PAH"
            width="109"
          />
        </a>
      </li>
      <li>
        <a
          href="https://pck.pl/na-pomoc-ukrainie/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="opacity-40 transition hover:opacity-100"
            src="/orgs/PCK.png"
            alt="Polish Red Cross"
            width="60"
          />
        </a>
      </li>
    </ul>
    <ul className="flex items-center justify-center gap-14  mb-40">
      <li>
        <a
          href="https://www.insight-ukraine.org/en/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="opacity-40 transition hover:opacity-100"
            src="/orgs/insight-org.png"
            alt="insight"
            width="161"
          />
        </a>
      </li>
      <li>
        <a href="https://voices.org.ua/en/" target="_blank" rel="noreferrer">
          <img
            className="opacity-40 transition hover:opacity-100"
            src="/orgs/children.png"
            alt="Voices of Children"
            width="61"
          />
        </a>
      </li>
      <li>
        <a href="https://razomforukraine.org/" target="_blank" rel="noreferrer">
          <img
            className="opacity-40 transition hover:opacity-100"
            src="/orgs/razom.png"
            alt="Voices of Children"
            width="144"
          />
        </a>
      </li>
    </ul>
  </>
)
