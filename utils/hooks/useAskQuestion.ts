import { useState } from "react"
import { realisticConfetti } from "../confetti"
import { api } from "../fetch"

export const useAskQuestion = () => {
    const [question, setQuestion] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [done, setDone] = useState(false)

    const sendQuestion = async (e: any) => {
        setDone(false)
        e.preventDefault()
        setLoading(true)
        setError("")
        try {
            await api.post({
                body: {
                    question,
                },
                url: "question",
            })
            setQuestion("")
            setDone(true)
            realisticConfetti()
        } catch {
            setError("Oops, there was a problem asking your question")
        } finally {
            setLoading(false)
        }
    }

    return {
        question,
        loading,
        error,
        sendQuestion,
        setQuestion,
        done,
    }
}
