import Link from "next/link"
import { useRouter } from "next/router"
import { Heart } from "../Icons"

export const DonateButton = () => {
  const { query } = useRouter()
  return (
    <Link href={{ query: { modal: "donate", ...query } }}>
      <a
        className="bg-devs-yellow text-devs-black px-4 py-2 rounded-md font-normal text-xs flex gap-2 items-center hover:bg-devs-yellow100 transition-colors"
        style={{ boxShadow: "0 0 32px rgb(255, 213, 0, 0.3)" }}
      >
        <Heart width="20" />
        Donate
      </a>
    </Link>
  )
}
