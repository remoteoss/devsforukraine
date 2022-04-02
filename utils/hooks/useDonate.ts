import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useState } from "react"

export const useDonate = () => {
    const [amount, setAmount] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const { data: session } = useSession()
    const router = useRouter()

    const getPaymentLink = async (e: any) => {
        e.preventDefault()

        if (loading) return

        setLoading(true)
        setError("")

        fetch("api/payment/create-payment-link", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                amount,
                email: session?.user?.email,
            }),
        })
            .then(async (res) => {
                const { session } = await res.json()

                router.push(session.url)
            })
            .catch(() => setError("Oops, can't generate donation link"))
            .finally(() => setLoading(false))
    }

    return {
        setAmount,
        error,
        getPaymentLink,
        amount, loading
    }
}