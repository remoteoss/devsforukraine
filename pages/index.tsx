import { Reactions } from "@prisma/client"
import { GetServerSideProps } from "next"
import { DonationProgress } from "../components/Home/DonationProgress"
import { Hero } from "../components/Home/Hero"
import { Info } from "../components/Home/Info"
import { Organizers } from "../components/Home/Organizers"
import { Speakers } from "../components/Home/Speakers"
import Layout from "../components/layout"
import { getAbsoluteURL } from "../utils/absoluteUrl"
import { balance } from "../utils/types"

type Props = { balance: balance; reactions: Reactions[] }

export default function IndexPage({ balance, reactions }: Props) {
  return (
    <Layout>
      <Hero />
      <Info balance={balance} />
      <DonationProgress {...balance} reactions={reactions} />
      <Speakers />
      <Organizers />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const base = getAbsoluteURL(req)
  const balance = await fetch(base + "/api/payment/balance").then((rsp) =>
    rsp.json()
  )
  const reactions = await fetch(base + "/api/reactions").then((rsp) =>
    rsp.json()
  )
  return {
    props: { balance, reactions },
  }
}
