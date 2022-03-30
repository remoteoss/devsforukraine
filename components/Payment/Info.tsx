import { useRouter } from "next/router"
import { useState } from "react"

export const Info = () => {
  const [amount, setAmount] = useState<string>("")

  const getPaymentLink = async (e: any) => {
    e.preventDefault()
    const { paymentLink } = await fetch("api/payment/create-payment-link", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
      }),
    }).then((res) => res.json())
    window.location.href = paymentLink.url
  }

  return (
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
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="20"
            aria-describedby="amount-currency"
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
  )
}
