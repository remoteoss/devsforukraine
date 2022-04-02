import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"
import { LeftSVG, RightSVG } from "../components/BGSvg"
import { RegisterWithGithub } from "../components/Buttons/RegisterGitHub"
import { ArrowRightIcon, LoadingIcon } from "../components/Icons"
import Layout from "../components/layout"
import { H2 } from "../components/Typography"
import { Session } from "../utils/types"

const AskAQuestionPage = ({ session }: { session: Session }) => {
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

  return (
    <Layout noFooter withBG>
      <div className="h-screen flex-col justify-center relative z-1 mt-[150px] text-center  w-[500px] max-w-[80%] m-auto">
        <H2 className="max-w-[400px] text-center m-auto">
          {session?.user
            ? "What is your question?"
            : "Sign in with github first"}
        </H2>
        {session?.user ? (
          <form className="block" onSubmit={sendQuestion}>
            <div className=" bg-[#1C1C1C] w-full  p-5 mt-20 h-[200px]  rounded-lg flex flex-col justify-between items-start">
              <input
                value={question}
                placeholder="Ask anything"
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full p-3 bg-transparent border-0 outline-none focus:outline-none placeholder:font-light font-light"
                maxLength={150}
              />
              {error && (
                <span className="pl-3 text-red-600 text-xs block mt-2">
                  {error}
                </span>
              )}
              <div className="flex justify-between items-center w-full">
                <div className="flex">
                  {session?.user?.image && (
                    <img
                      className="rounded-full w-6 h-6 m-auto mr-3"
                      src={session?.user?.image}
                      alt={session?.user?.name || "user"}
                    />
                  )}
                  <div>
                    <p className="text-xs text-left">{session?.user?.name}</p>
                    <p className="text-[11px] text-left text-devs-gray100">
                      @{session?.user?.username}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-devs-gray100">
                  {question.length} / 150
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <Link href={`/`}>
                <a className="bg-devs-gray200 px-6 py-3 rounded-md hover:bg-devs-gray50 font-normal text-xs gap-2 items-center hidden sm:flex transition-colors">
                  Cancel
                </a>
              </Link>
              {question && (
                <button
                  className="bg-devs-yellow text-black px-6 py-3 rounded-md font-semibold text-xs gap-2 items-center inline-flex"
                  type="submit"
                >
                  Send my question
                  {loading ? (
                    <LoadingIcon width="16" height="16" />
                  ) : (
                    <ArrowRightIcon />
                  )}
                </button>
              )}
            </div>
          </form>
        ) : (
          <div className="flex-col items-center justify-center">
            <RegisterWithGithub className="!inline-flex mt-10" />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default AskAQuestionPage

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  return {
    props: { session },
  }
}
