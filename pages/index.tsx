import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import Link from "next/link"
import Layout from "../components/layout"
import { getAbsoluteURL } from "../utils/absoluteUrl"

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
})

type Props = {
  balance: { balance: number; goal: number; percentage: number }
}

export default function IndexPage({ balance }: Props) {
  return (
    <Layout>
      <div className="flex items-center gap-4 h-screen justify-center flex-col">
        <h1 className="text-3xl text-center">
          Devs For{" "}
          <span className="block text-[88px] mt-6 font-extrabold">Ukraine</span>
        </h1>
        <h2 className="mt-8 font-mono text-devs-gray100">
          Free Engineering Conference on{" "}
          <span className="text-devs-blue">April 25, 26</span> 2022
        </h2>
      </div>
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
