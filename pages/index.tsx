import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import Link from "next/link"
import Layout from "../components/layout"

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
      <div className="flex items-center gap-4 mt-12">
        0
        <div className="w-full relative">
          <div className="progress bg-slate-600 overflow-hidden rounded-lg h-[60px] w-full">
            <span
              className="progress-bar"
              style={{ width: balance.percentage * 100 + "%" }}
            ></span>
          </div>
          <span
            className="absolute -ml-4"
            style={{ left: balance.percentage * 100 + "%" }}
          >
            {formatter.format(balance.balance)}
          </span>
        </div>
        {formatter.format(balance.goal)}
      </div>
      <div className="flex justify-center mt-6">
        <Link href="/donate">
          <a className="button">Donate</a>
        </Link>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const protocol = req.headers["x-forwarded-proto"] || "http"
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ""
  const balance = await fetch(baseUrl + "/api/payment/balance").then((rsp) =>
    rsp.json()
  )
  return {
    props: { balance },
  }
}
