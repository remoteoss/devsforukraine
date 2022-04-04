import { motion } from "framer-motion"
import { useSession } from "next-auth/react"
import { DEFAULT_MOTION } from "../../utils/constants"
import { backendSpeakers, frontendSpeakers } from "../../utils/speakers"
import { SecondaryButton } from "../Buttons/Secondary"
import { TwitterSmall } from "../Icons"
import { MotionH2, MotionH4 } from "../Typography"

export const Speakers = () => (
  <div className="flex  gap-4 min-h-screen flex-col pt-16">
    <div className="mt-28 text-center">
      <MotionH2 {...DEFAULT_MOTION({ delay: 0.1 })}>Speaker Panel</MotionH2>
    </div>
    <MotionH4
      {...DEFAULT_MOTION({ delay: 0.25 })}
      className="mt-5 m-auto block"
    >
      Spend <span className="text-white">2 days</span> learning from{" "}
      <span className="text-white">engineering leaders</span> around the globe.
      Topics will include{" "}
      <span className="text-white">
        career growth, team leadership, tech’s ability
      </span>{" "}
      to create a more equitable world, and more.
    </MotionH4>
    <div className="mt-20 mb-11 flex  items-end">
      <h6 className="block text-devs-gray100 text-2xl font-bossa font-light min-w-[250px]">
        <span className="bold text-white font-medium block">Day 1</span>{" "}
        Speakers & Talks
      </h6>
      <div className="h-[1px] w-full bg-white mb-2" />
    </div>
    <ul className="mb-28">
      {frontendSpeakers.map((speaker, index) => (
        <Speaker key={speaker.name} i={index} speaker={speaker} />
      ))}
    </ul>
    <div className="mt-20 mb-11 flex items-end">
      <h6 className="block text-devs-gray100 text-2xl font-bossa font-light min-w-[250px]">
        <span className="bold text-white font-medium block">Day 2</span>{" "}
        Speakers & Talks
      </h6>
      <div className="h-[1px] w-full bg-white mb-2" />
    </div>
    <ul className="mb-28">
      {backendSpeakers.map((speaker, index) => (
        <Speaker key={speaker.name} i={index} speaker={speaker} />
      ))}
    </ul>
  </div>
)
const motionStagger = (index: number) => ({
  ...DEFAULT_MOTION({ delay: index * 0.01 }),
})
const Speaker = ({ speaker, i }: { speaker: any; i: number }) => {
  const { data: session } = useSession()
  return (
    <motion.li
      {...motionStagger(i)}
      className="sm:flex flex-col sm:flex-row justify-between items-center mb-6 pb-6 border-b-[1px] border-opacity-20 border-dashed border-white"
    >
      <div className="flex items-center">
        <img
          src={`/speakers/${speaker.pic}`}
          alt={speaker.name}
          className="w-16 h-16 rounded-full mr-6"
        />

        <div>
          <div className="flex gap-3">
            <span className="font-bossa">{speaker.name}</span>

            <a
              className="text-devs-blue pt-1"
              href={`https://twitter.com/${speaker.twitter}`}
            >
              <TwitterSmall />
            </a>
          </div>
          <p className="block text-devs-gray100 text-sm mt-1"> {speaker.bio}</p>
        </div>
      </div>
      <p className="font-bossa flex sm:max-w-[40%] mt-4 sm:mt-0 gap-4 items-center">
        <span className="pr-1">🎤 </span>
        {speaker.talk || "TBD"}
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
      </p>
    </motion.li>
  )
}
