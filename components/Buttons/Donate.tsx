import Link from "next/link"
import { Heart } from "../Icons"

export const DonateButton = () => (
  <Link href={{ query: { modal: "donate" } }}>
    <a className="bg-devs-yellow text-devs-black px-4 py-2 rounded-md font-normal text-xs flex gap-2 items-center hover:bg-devs-yellow100 transition-colors">
      <Heart width="20" />
      Donate
    </a>
  </Link>
)
