import { DEFAULT_MOTION } from "../../utils/constants"
import { motion } from "framer-motion"
import { allNgos } from "./ngos"

const motionStagger = (index: number) => ({
  ...DEFAULT_MOTION({ delay: index * 0.01 }),
})

export const NGOS = () => (
  <>
    <ul className="flex md:grid grid-cols-4 flex-wrap items-center justify-center gap-14 mb-10">
      {allNgos.map(({ Text, ...ngo }, i) => (
        <motion.li
          key={ngo.link}
          {...motionStagger(i)}
          className="flex justify-center"
        >
          <a href={ngo.link} target="_blank" rel="noreferrer">
            {ngo.image ? (
              <img
                className="opacity-40 transition hover:opacity-100"
                src={ngo.image}
                alt={ngo.name}
                width={ngo.width}
              />
            ) : (
              // @ts-ignore
              <Text />
            )}
          </a>
        </motion.li>
      ))}
    </ul>
  </>
)
