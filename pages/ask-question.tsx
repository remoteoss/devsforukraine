import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import Layout from "../components/layout"
import { QuestionForm } from "../components/Question/Form"
import { H2 } from "../components/Typography"
import { Session } from "../utils/types"

const AskAQuestionPage = ({ session }: { session: Session }) => (
  <Layout noFooter withBG center>
    <div className="flex-col justify-center relative z-1 text-center  w-[500px] max-w-[80%] m-auto">
      <H2 className="max-w-[400px] text-center mx-auto">
        What is your question?
      </H2>
      <QuestionForm {...session} />
    </div>
  </Layout>
)

export default AskAQuestionPage

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (!session?.user) {
    return {
      redirect: {
        destination: "/?modal=signin",
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}
