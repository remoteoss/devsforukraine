import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import { useEffect } from "react"
import { RegisterWithGithub } from "../components/Buttons/RegisterGitHub"
import Layout from "../components/layout"
import { QuestionForm } from "../components/Question/Form"
import { H2 } from "../components/Typography"
import { Session } from "../utils/types"

const AskAQuestionPage = ({ session }: { session: Session }) => {
  return (
    <Layout noFooter withBG>
      <div className="h-screen flex-col justify-center relative z-1 mt-[150px] text-center  w-[500px] max-w-[80%] m-auto">
        <H2 className="max-w-[400px] text-center m-auto">
          {session?.user
            ? "What is your question?"
            : "Sign in with github first"}
        </H2>
        {session?.user ? (
          done ? (
            "done"
          ) : (
            <QuestionForm {...session} />
          )
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
