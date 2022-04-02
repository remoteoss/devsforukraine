import Link from "next/link"
import { useAskQuestion } from "../../utils/hooks/useAskQuestion"
import { Session } from "../../utils/types"
import { SecondaryButton } from "../Buttons/Secondary"
import { ArrowRightIcon, LoadingIcon } from "../Icons"

export const QuestionForm = (session: Session) => {
  const { question, loading, error, sendQuestion, setQuestion } =
    useAskQuestion()

  return (
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
          <span className="pl-3 text-red-600 text-xs block mt-2">{error}</span>
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
        <SecondaryButton href="/">Cancel</SecondaryButton>
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
  )
}
