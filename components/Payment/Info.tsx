import { useRouter } from "next/router"
import { useState } from "react"
import { PAYMENT_STEPS } from "../../utils/constants"

export const Info = ({ session, setClientSecret }: any) => {
  const router = useRouter()
  const [amount, setAmount] = useState<string>("")
  const [email, setEmail] = useState<string>(session?.user?.email || "")

  const createPaymentIntent = async (e: any) => {
    e.preventDefault()
    const data = await fetch("api/payment/paymentIntent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, email }),
    }).then((res) => res.json())
    setClientSecret(data.clientSecret)
    router.replace(`/donate?step=${PAYMENT_STEPS.PAYMENT}`)
  }

  return (
    <form onSubmit={createPaymentIntent} className="flex items-center gap-4">
      <div>
        <label htmlFor="amount" className="sr-only">
          Amount
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">€</span>
          </div>
          <input
            type="text"
            name="amount"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="20"
            aria-describedby="amount-currency"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm" id="amount-currency">
              EUR
            </span>
          </div>
        </div>
      </div>

      {!session?.user?.email && (
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      )}
      <button type="submit">Donate</button>
    </form>
  )
}
