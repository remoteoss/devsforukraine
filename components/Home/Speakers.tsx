import confetti from "canvas-confetti"
import { motion } from "framer-motion"
import { shuffle } from "lodash-es"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { DEFAULT_MOTION } from "../../utils/constants"
import {
  backendSpeakers as backendSpeakersOriginal,
  frontendSpeakers as frontendSpeakersOriginal,
} from "../../utils/speakers"
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

// generated with https://gcal.dotenv.dev/
const gCalLinks = [
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Devs for Ukraine - Day 1&dates=20220425T160000Z/20220425T210000Z&details=",
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Devs for Ukraine - Day 2&dates=20220426T160000Z/20220426T210000Z&details=",
]

const Header = ({ i }: { i: number }) => (
  <motion.div
    {...DEFAULT_MOTION({})}
    className="mt-[160px] mb-20 flex items-end justify-between"
  >
    <SubHeadlineXL className="block !text-devs-gray100 min-w-[188px] mr-[48px]">
      <H3 className="text-white block">Day {i}</H3> Speakers & Talks
    </SubHeadlineXL>
    <div className="h-[1px] w-full bg-white mb-4" />
    <SecondaryButton
      href={gCalLinks[i - 1]}
      target="_blank"
      rel="noreferrer"
      className="min-w-[168px] self-center ml-[48px]"
    >
      Add to your calendar
    </SecondaryButton>
  </motion.div>
)

export const Speakers = () => {
  const [frontendSpeakers, setFrontendSpeakers] = useState(
    frontendSpeakersOriginal
  )
  const [backendSpeakers, setBackendSpeakers] = useState(
    backendSpeakersOriginal
  )

  useEffect(() => setBackendSpeakers(shuffle(backendSpeakersOriginal)), [])
  useEffect(() => setFrontendSpeakers(shuffle(frontendSpeakersOriginal)), [])

  return (
    <div className="flex  gap-4 min-h-screen flex-col pt-[160px]">
      <div className="text-center">
        <MotionH2 {...DEFAULT_MOTION()}>Speaker Panel</MotionH2>
      </div>
      <MotionSubHeadlineLarge
        {...DEFAULT_MOTION()}
        className="mt-5 m-auto block text-center !text-devs-gray100 max-w-[560px]"
      >
        Spend <span className="text-white">2 days</span> learning from{" "}
        <span className="text-white">engineering leaders</span> around the
        globe. Topics will include{" "}
        <span className="text-white">
          career growth, team leadership, tech’s ability
        </span>{" "}
        to create a more equitable world, and more.
      </MotionSubHeadlineLarge>
      <Header i={1} />
      <ul className="mb-28">
        {frontendSpeakers.map((speaker, index) => (
          <Speaker
            key={`${speaker.name}-${speaker.pic}`}
            i={index}
            speaker={speaker}
          />
        ))}
      </ul>
      <Header i={2} />
      <ul className="mb-28">
        {backendSpeakers.map((speaker, index) => (
          <Speaker
            key={`${speaker.name}-${speaker.pic}`}
            i={index}
            speaker={speaker}
          />
        ))}
      </ul>
    </div>
  )
}
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
          disabled={!speaker.turtle}
          className="relative min-w-[64px] w-16  mr-6"
          onClick={speaker.turtle ? showTurtle : () => {}}
        >
          <Image
            // @ts-ignore
            ref={speaker.turtle ? ref : null}
            src={speaker.pic}
            alt={speaker.name}
            width={64}
            height={64}
            className="rounded-full"
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
              aria-label={`${speaker.name} on Twitter`}
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
