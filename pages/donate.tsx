import Layout from "../components/layout"
import { useRouter } from "next/router"
import { Final } from "../components/Payment/Final"
import { Info } from "../components/Payment/Info"
import { PAYMENT_STEPS } from "../utils/constants"

const DonatePage = () => {
  const router = useRouter()
  const { step } = router.query

  return <Layout>{step === PAYMENT_STEPS.FINAL && <Final />}</Layout>
}

export default DonatePage
