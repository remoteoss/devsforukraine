import React, { useState, useEffect, Fragment } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import CheckoutForm from "../components/Payment/CheckoutForm"
import { getSession } from "next-auth/react"
import Layout from "../components/layout"
import { useRouter } from "next/router"
import { GetServerSideProps } from "next"
import { Final } from "../components/Payment/Final"
import { Info } from "../components/Payment/Info"
import { PAYMENT_STEPS } from "../utils/constants"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string)

const Donate = ({ session, setClientSecret, clientSecret }: any) => {
  const router = useRouter()
  const { step } = router.query

  useEffect(() => {
    if (step === PAYMENT_STEPS.PAYMENT && !clientSecret)
      router.replace(`/donate?step=${PAYMENT_STEPS.INFO}`)
  })
  if (!step || step === PAYMENT_STEPS.INFO) {
    return <Info session={session} setClientSecret={setClientSecret} />
  }

  if (step === PAYMENT_STEPS.PAYMENT && clientSecret) {
    return <CheckoutForm />
  }

  if (step === PAYMENT_STEPS.FINAL && clientSecret) {
    return <Final clientSecret={clientSecret} />
  }

  return null
}

const DonatePage = (props: any) => {
  const [clientSecret, setClientSecret] = useState<string>("")
  const { query } = useRouter()
  const { payment_intent_client_secret: urlSecret } = query as {
    payment_intent_client_secret: string
  }

  useEffect(() => {
    if (urlSecret) setClientSecret(urlSecret)
  }, [urlSecret])

  const Wrapper = clientSecret ? Elements : Fragment
  const wrapperProps = clientSecret
    ? {
        options: {
          clientSecret,
          appearance: {
            theme: "stripe",
          },
        },
        stripe: stripePromise,
      }
    : {}
  return (
    <Layout>
      {/* @ts-ignore */}
      <Wrapper {...wrapperProps}>
        <Donate
          {...props}
          clientSecret={clientSecret}
          setClientSecret={setClientSecret}
        />
      </Wrapper>
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
