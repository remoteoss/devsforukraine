import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useState } from "react"
import { api } from "../fetch"

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
        try {
            const data = await api.post({
                url: "payment/create-payment-link", body: {
                    amount,
                    email: session?.user?.email,
                }
            })
            router.push(data.session.url)
        } catch { setError("Oops, can't generate donation link") } finally {
            setLoading(false)
        }

    }

    return {
        setAmount,
        error,
        getPaymentLink,
        amount, loading
    }
}