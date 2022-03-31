import { useRouter } from "next/router"
import { useState } from "react"

export const Info = () => {
  const [amount, setAmount] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const getPaymentLink = (e: any) => {
    e.preventDefault()

    if (loading) return

    setLoading(true)
    setError("")
    fetch("api/payment/create-payment-link", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
      }),
    })
      .then(async (res) => {
        const { paymentLink } = await res.json()

        router.push(paymentLink.url)
      })
      .catch(() => setError("Oops, can't generate donation link"))
      .finally(() => setLoading(false))
  }

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={getPaymentLink} className="flex items-center gap-4">
        <div>
          <label htmlFor="amount" className="sr-only">
            Amount
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="text"
              name="amount"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md text-black"
              placeholder="20"
              aria-describedby="amount-currency"
              disabled={loading}
              required
              autoFocus
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm" id="amount-currency">
                USD
              </span>
            </div>
          </div>
        </div>
        <button type="submit">Donate</button>
      </form>

      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}
    </div>
  )
}
