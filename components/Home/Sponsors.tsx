import { motion } from "framer-motion"
import { DEFAULT_MOTION } from "../../utils/constants"
import { MotionH2, MotionSubHeadlineLarge } from "../Typography"

import Image from "next/image"

import frontendmasters from "../../public/sponsors/frontendmasters.svg"
import osscapital from "../../public/sponsors/osscapital.png"

const sponsors = [
  {
    name: "Frontend Masters",
    link: "https://frontendmasters.com/",
    image: frontendmasters,
    width: 200,
    height: 48,
  },
  {
    name: "OSS Capital",
    link: "https://oss.capital/",
    image: osscapital,
    width: 200,
    height: 200,
  },
]

const motionStagger = (index: number) => ({
  ...DEFAULT_MOTION({ delay: index * 0.05 }),
})

export const Sponsors = () => (
  <div className="flex gap-4 min-h-screen flex-col pt-[160px]">
    <div className="text-center">
      <MotionH2
        {...DEFAULT_MOTION()}
        className="flex items-end justify-center gap-2"
      >
        Sponsors
      </MotionH2>
    </div>
    <MotionSubHeadlineLarge
      {...DEFAULT_MOTION()}
      className="mt-5 mx-auto block text-center !text-devs-gray100 max-w-[560px]"
    >
      These wonderful organizations donated above and beyond to help us reach
      our donation goals.
    </MotionSubHeadlineLarge>
    <ul className="flex gap-8 flex-wrap items-center justify-center mt-[120px] mb-[160px]">
      {sponsors.map((sponsor, i) => (
        <motion.li
          {...motionStagger(i)}
          key={sponsor.name}
          className="flex items-center justify-center"
        >
          <a href={sponsor.link} target="_blank" rel="noreferrer">
            <Image
              className="opacity-40 transition hover:opacity-100"
              src={sponsor.image}
              alt={sponsor.name}
              width={sponsor.width}
              height={sponsor.height}
            />
          </a>
        </motion.li>
      ))}
    </ul>
  </div>
)
