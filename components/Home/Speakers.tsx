import { openModal } from "react-url-modal"
import { motion } from "framer-motion"
import { shuffle } from "lodash-es"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useEffect, useState } from "react"
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

const Header = ({ i }: { i: number }) => (
  <motion.div
    {...DEFAULT_MOTION({})}
    className="mt-[160px] mb-20 sm:flex items-end justify-between"
  >
    <SubHeadlineXL className="block !text-devs-gray100 min-w-[188px] mr-[48px]">
      <H3 className="text-white block">Day {i}</H3> Speakers & Talks
    </SubHeadlineXL>
    <div className="h-[1px] w-full bg-white mb-4 sm:block hidden" />
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

  return (
    <motion.li
      {...motionStagger(i)}
      className="sm:flex flex-col sm:flex-row justify-between items-center mb-6 pb-6 border-b-[1px] border-opacity-20 border-dashed border-white"
    >
      <div className="flex items-center">
        <button
          disabled={!speaker.turtle}
          className="relative min-w-[64px] w-16  mr-6"
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
          <TalkName className="!text-devs-gray100 pt-1">
            {" "}
            {speaker.talk || "TBD"}
          </TalkName>
        </div>
      </div>
      <div className="flex sm:max-w-[70%] mt-4 sm:mt-0 gap-4 items-center">
        <SecondaryButton href={speaker.yt} target="_blank" rel="noreferrer">
          View talk
        </SecondaryButton>
      </div>
    </motion.li>
  )
}
