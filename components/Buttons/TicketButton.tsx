import { useSession } from "next-auth/react"

import { Session } from "../../utils/types"
import { TicketIcon } from "../Icons"
import { SecondaryButton } from "./Secondary"

export const TicketButton = () => {
  const { data: session } = useSession() as { data: Session }

  return (
    <SecondaryButton href={`/tickets/${session?.user?.username}`}>
      <TicketIcon />
      My ticket
    </SecondaryButton>
  )
}
