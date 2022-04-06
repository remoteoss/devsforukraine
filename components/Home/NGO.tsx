import { DEFAULT_MOTION } from "../../utils/constants"
import { motion } from "framer-motion"
import Image from "next/image"
import comebackAlive from "../../public/orgs/ComeBackAlive.png"
import redCross from "../../public/orgs/ua-red.png"
import FAH from "../../public/orgs/FAH.png"
import PAH from "../../public/orgs/PAH.png"
import razom from "../../public/orgs/razom.png"
import children from "../../public/orgs/children.png"
import insight from "../../public/orgs/insight-org.png"

export const allNgos = [
  {
    name: "ComeBackAlive",
    link: "https://www.comebackalive.in.ua/",
    image: comebackAlive,
    width: 135,
    height: 56,
  },
  {
    name: "UA red cross",
    link: "https://redcross.org.ua/",
    image: redCross,
    width: 60,
    height: 61,
  },
  {
    name: "PolskaAkcjaHumanitarna",
    link: "https://www.pah.org.pl/sos-ukraina/",
    image: PAH,
    width: 109,
    height: 52,
  },
  {
    name: "Fundraising Account for Humanitarian Assistance to Ukrainians",
    link: "https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-rahunok-dlya-gumanitarnoyi-dopomogi-ukrayintsyam-postrajdalim-vid-rosiyskoyi-agresiyi",
    image: FAH,
    width: 160,
    height: 40,
  },
  {
    name: "Insight",
    link: "https://www.insight-ukraine.org/en/",
    image: insight,
    width: 161,
    height: 28,
  },
  {
    name: "Razom",
    link: "https://razomforukraine.org/",
    image: razom,
    width: 144,
    height: 56,
  },
  {
    name: "Voices of Children",
    link: "https://voices.org.ua/en/",
    image: children,
    width: 61,
    height: 64,
  },
  {
    name: "Coalition To Support BlackPeople In Ukraine",
    link: "https://www.gofundme.com/f/support-vulnerable-black-people-in-ukraine",
    Text: () => (
      <p className="opacity-40 transition hover:opacity-100 font-bossa text-center text-sm italic">
        CoalitionToSupport <br />
        BlackPeopleInUkraine
      </p>
    ),
  },
]

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
              <Image
                className="opacity-40 transition hover:opacity-100"
                src={ngo.image}
                alt={ngo.name}
                width={ngo.width}
                height={ngo.height}
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
