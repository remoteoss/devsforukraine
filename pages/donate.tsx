import React from "react"

import { getSession } from "next-auth/react"
import Layout from "../components/layout"
import { useRouter } from "next/router"
import { GetServerSideProps } from "next"
import { Final } from "../components/Payment/Final"
import { Info } from "../components/Payment/Info"
import { PAYMENT_STEPS } from "../utils/constants"

const DonatePage = () => {
  const router = useRouter()
  const { step } = router.query

  return (
    <Layout>
      {!step || (step === PAYMENT_STEPS.INFO && <Info />)}
      {step === PAYMENT_STEPS.FINAL && <Final />}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })
  return {
    props: { session },
  }
}

export default DonatePage
