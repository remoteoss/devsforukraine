import { useState } from "react"

export const useAskQuestion = () => {
    const [question, setQuestion] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const sendQuestion = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        fetch("api/question", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                question,
            }),
        })
            .then((res) => res.json())
            .catch(() => setError("Oops, there was a problem asking your question"))
            .finally(() => setLoading(false))
    }
    return {
        question,
        loading,
        error,
        sendQuestion,
        setQuestion
    }
}