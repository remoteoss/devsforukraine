import confetti from "canvas-confetti"
import { motion } from "framer-motion"
import { useSession } from "next-auth/react"
import { useRef, useState } from "react"
import { DEFAULT_MOTION } from "../../utils/constants"
import { backendSpeakers, frontendSpeakers } from "../../utils/speakers"
import { SecondaryButton } from "../Buttons/Secondary"
import { TwitterSmall } from "../Icons"
import {
  H3,
  Label,
  MotionH2,
  MotionSubHeadlineLarge,
  SubHeadlineXL,
  TalkName,
} from "../Typography"

export const Speakers = () => (
  <div className="flex  gap-4 min-h-screen flex-col pt-[160px]">
    <div className="text-center">
      <MotionH2 {...DEFAULT_MOTION()}>Speaker Panel</MotionH2>
    </div>
    <MotionSubHeadlineLarge
      {...DEFAULT_MOTION()}
      className="mt-5 m-auto block text-center !text-devs-gray100 max-w-[560px]"
    >
      Spend <span className="text-white">2 days</span> learning from{" "}
      <span className="text-white">engineering leaders</span> around the globe.
      Topics will include{" "}
      <span className="text-white">
        career growth, team leadership, tech’s ability
      </span>{" "}
      to create a more equitable world, and more.
    </MotionSubHeadlineLarge>
    <motion.div
      {...DEFAULT_MOTION({})}
      className="mt-[160px] mb-20 flex  items-end"
    >
      <SubHeadlineXL className="block !text-devs-gray100  min-w-[250px]">
        <H3 className="text-white block">Day 1</H3> Speakers & Talks
      </SubHeadlineXL>
      <div className="h-[1px] w-full bg-white mb-2" />
    </motion.div>
    <ul className="mb-28">
      {frontendSpeakers.map((speaker, index) => (
        <Speaker key={speaker.name} i={index} speaker={speaker} />
      ))}
    </ul>
    <motion.div {...DEFAULT_MOTION({})} className="mt-20 mb-11 flex items-end">
      <SubHeadlineXL className="block !text-devs-gray100  min-w-[250px]">
        <H3 className="text-white block">Day 2</H3> Speakers & Talks
      </SubHeadlineXL>
      <div className="h-[1px] w-full bg-white mb-2" />
    </motion.div>
    <ul className="mb-28">
      {backendSpeakers.map((speaker, index) => (
        <Speaker key={speaker.name} i={index} speaker={speaker} />
      ))}
    </ul>
  </div>
)
const motionStagger = (index: number) => ({
  ...DEFAULT_MOTION({ delay: index * 0.05 }),
})
const Speaker = ({ speaker, i }: { speaker: any; i: number }) => {
  const { data: session } = useSession()
  const [clicked, setClicked] = useState(false)
  const ref = useRef<HTMLButtonElement>()

  const showTurtle = () => {
    setClicked((c) => !c)
    if (ref?.current) {
      confetti({
        colors: ["#E7CD54", "#2797FA"],
        particleCount: 50,
        shapes: ["square"],
        origin: {
          y: ref?.current?.getBoundingClientRect().top / window.innerHeight,
          x: ref?.current?.getBoundingClientRect().left / window.innerWidth,
        },
      })
    }
  }
  return (
    <motion.li
      {...motionStagger(i)}
      className="sm:flex flex-col sm:flex-row justify-between items-center mb-6 pb-6 border-b-[1px] border-opacity-20 border-dashed border-white"
    >
      <div className="flex items-center">
        <button
          className="relative"
          onClick={speaker.turtle ? showTurtle : () => {}}
        >
          <img
            // @ts-ignore
            ref={speaker.turtle ? ref : null}
            src={`/speakers/${speaker.pic}`}
            alt={speaker.name}
            className="w-16 h-16 rounded-full mr-6"
          />
          {clicked && (
            <div className="w-16 h-16 rounded-full absolute inset-0 bg-devs-black opacity-70 flex items-center justify-center text-4xl">
              🐢
            </div>
          )}
        </button>

        <div>
          <div className="flex gap-3 items-center">
            <span className="font-bossa">{speaker.name}</span>

            <a
              className="text-devs-blue pt-1"
              href={`https://twitter.com/${speaker.twitter}`}
            >
              <TwitterSmall />
            </a>
          </div>
          <Label className="!text-devs-gray100 pt-1">{speaker.bio}</Label>
        </div>
      </div>
      <div className="flex sm:max-w-[60%] mt-4 sm:mt-0 gap-4 items-center">
        <TalkName className="sm:text-right">
          <span className="pr-1">🎤 </span>
          {speaker.talk || "TBD"}
        </TalkName>

        {speaker.qa && (
          <SecondaryButton
            href={
              session?.user
                ? "/ask-question"
                : {
                    shallow: true,
                    query: {
                      modal: "signin",
                    },
                  }
            }
          >
            Ask a Question
          </SecondaryButton>
        )}
      </div>
    </motion.li>
  )
}
