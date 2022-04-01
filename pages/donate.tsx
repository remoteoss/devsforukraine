import Layout from "../components/layout"
import { useRouter } from "next/router"
import { Final } from "../components/Payment/Final"
import { PAYMENT_STEPS } from "../utils/constants"

const DonatePage = () => {
  const router = useRouter()
  const { step } = router.query

  return (
    <Layout noFooter>{step === PAYMENT_STEPS.FINAL ? <Final /> : null}</Layout>
  )
}

export default DonatePage
