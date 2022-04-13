import { GetServerSideProps } from "next"
import { Hero } from "../components/Home/Hero"
import { Info } from "../components/Home/Info"
import { Organizers } from "../components/Home/Organizers"
import { Speakers } from "../components/Home/Speakers"
import { Sponsors } from "../components/Home/Sponsors"
import Layout from "../components/layout"
import { getAbsoluteURL } from "../utils/absoluteUrl"
import { balance } from "../utils/types"

type Props = { balance: balance }

export default function IndexPage({ balance }: Props) {
  return (
    <Layout>
      <Hero />
      <Info balance={balance} />
      <Speakers />
      <Organizers />
      <Sponsors />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const base = getAbsoluteURL(req)
  const balance = await fetch(base + "/api/payment/balance").then((rsp) =>
    rsp.json()
  )
  return {
    props: { balance },
  }
}
