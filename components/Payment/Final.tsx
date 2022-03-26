import { useEffect, useState } from "react"
import { useStripe } from "@stripe/react-stripe-js"

export const Final = ({ clientSecret }: { clientSecret: string }) => {
  const stripe = useStripe()
  const [info, setInfo] = useState<any>({})

  useEffect(() => {
    console.log(stripe, clientSecret)
    if (!stripe || !clientSecret) {
      return
    }

    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({ paymentIntent }) => setInfo(paymentIntent))
  }, [clientSecret, stripe])

  return <pre>{JSON.stringify(info, null, 2)}</pre>
}
