import { useSession } from "next-auth/react"
import Link from "next/link"
import { Session } from "../../utils/types"
import { TicketIcon } from "../Icons"

export const TicketButton = () => {
  const { data: session } = useSession() as { data: Session }

  return (
    <Link href={`/tickets/${session?.user?.username}`}>
      <a className="bg-devs-gray200 px-4 py-2 rounded-md hover:bg-devs-gray50 font-normal text-xs gap-2 items-center hidden sm:flex transition-colors">
        <TicketIcon />
        My ticket
      </a>
    </Link>
  )
}
