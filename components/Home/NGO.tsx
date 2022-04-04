import { DEFAULT_MOTION } from "../../utils/constants"
import { motion } from "framer-motion"

const motionStagger = (index: number) => ({
  ...DEFAULT_MOTION({ delay: index * 0.01 }),
})

export const NGOS = () => (
  <>
    <ul className="flex flex-wrap items-center justify-center gap-14 mb-10">
      <motion.li {...motionStagger(0)}>
        <a
          href="https://www.comebackalive.in.ua/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="opacity-40 transition hover:opacity-100"
            src="/orgs/ComeBackAlive.png"
            alt="ComeBackAlive"
            width="135"
          />
        </a>
      </motion.li>
      <motion.li {...motionStagger(1)}>
        <a href="https://redcross.org.ua/" target="_blank" rel="noreferrer">
          <img
            className="opacity-40 transition hover:opacity-100"
            src="/orgs/ua-red.png"
            alt="UA red cross"
            width="60"
          />
        </a>
      </motion.li>

      <motion.li {...motionStagger(2)}>
        <a
          href="https://www.pah.org.pl/sos-ukraina/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="opacity-40 transition hover:opacity-100"
            src="/orgs/PAH.png"
            alt="PAH"
            width="109"
          />
        </a>
      </motion.li>
      <motion.li {...motionStagger(3)}>
        <a
          href="https://pck.pl/na-pomoc-ukrainie/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="opacity-40 transition hover:opacity-100"
            src="/orgs/PCK.png"
            alt="Polish Red Cross"
            width="60"
          />
        </a>
      </motion.li>
    </ul>
    <ul className="flex items-center justify-center gap-14  mb-10 flex-wrap">
      <motion.li {...motionStagger(4)}>
        <a
          href="https://www.insight-ukraine.org/en/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="opacity-40 transition hover:opacity-100"
            src="/orgs/insight-org.png"
            alt="insight"
            width="161"
          />
        </a>
      </motion.li>
      <motion.li {...motionStagger(5)}>
        <a href="https://voices.org.ua/en/" target="_blank" rel="noreferrer">
          <img
            className="opacity-40 transition hover:opacity-100"
            src="/orgs/children.png"
            alt="Voices of Children"
            width="61"
          />
        </a>
      </motion.li>
      <motion.li {...motionStagger(6)}>
        <a href="https://razomforukraine.org/" target="_blank" rel="noreferrer">
          <img
            className="opacity-40 transition hover:opacity-100"
            src="/orgs/razom.png"
            alt="Voices of Children"
            width="144"
          />
        </a>
      </motion.li>
      <motion.li {...motionStagger(7)}>
        <a
          href="https://www.gofundme.com/f/support-vulnerable-black-people-in-ukraine"
          target="_blank"
          rel="noreferrer"
        >
          <p className="opacity-40 transition hover:opacity-100 font-bossa text-center text-sm italic">
            CoalitionToSupport <br />
            BlackPeopleInUkraine
          </p>
        </a>
      </motion.li>
    </ul>
  </>
)
