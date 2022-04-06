import { DEFAULT_MOTION } from "../../utils/constants"
import { ByRemoteIcon, TwitterSmall } from "../Icons"
import { Label, MotionH2, MotionSubHeadlineLarge } from "../Typography"

const organizers = [
  {
    name: "Sara Vieira",
    title: "Frontend Developer",
    twitter: "NikkitaFTW",
    image: "sara.jpeg",
  },
  {
    name: "Marcelo Lebre",
    title: "COO at Remote",
    twitter: "marcelo_lebre",
    image: "marcelo.jpeg",
  },
  {
    name: "Cassidy Williams",
    title: "Head of Developer Experience",
    twitter: "cassidoo",
    image: "cassidy.jpg",
  },
  {
    name: "Adrien Thomas",
    title: "Staff Product Designer",
    image: "adrien.jpeg",
    twitter: "adrienths",
  },
  {
    name: "Tobi Pfeiffer",
    title: "Staff Engineer & Bunny Lover",
    twitter: "PragTob",
    image: "tobi.jpg",
  },
]

export const Organizers = () => (
  <div className="flex gap-4 min-h-screen flex-col pt-[160px]">
    <div className="text-center">
      <MotionH2
        {...DEFAULT_MOTION()}
        className="flex items-end justify-center gap-2"
      >
        Organized <ByRemoteIcon className="relative bottom-1" />
      </MotionH2>
    </div>
    <MotionSubHeadlineLarge
      {...DEFAULT_MOTION()}
      className="mt-5 mx-auto block text-center !text-devs-gray100 max-w-[560px]"
    >
      This charity event was put together by the lovely people at Remote who
      made this possible.
    </MotionSubHeadlineLarge>
    <ul className="flex gap-8 flex-wrap items-center justify-center mt-[120px] mb-[160px]">
      {organizers.map((organizer) => (
        <li
          key={organizer.name}
          className="bg-white bg-opacity-5 rounded-md h-[180px] flex items-center justify-center flex-col relative w-[290px]"
        >
          <a
            href={`https://twitter.com/${organizer.twitter}`}
            target="_blank"
            rel="noreferrer"
            className="absolute top-6 right-6"
            aria-label={`${organizer.name} on Twitter`}
          >
            <TwitterSmall />
          </a>
          <img
            src={`organizers/${organizer.image}`}
            alt={organizer.name}
            className="rounded-full w-[56px] h-[56px] mb-3"
          />
          <Label className="font-size-[14px] mb-2">{organizer.name}</Label>
          <Label className="font-light !text-[#8a8787] text-center max-w-[80%]">
            {organizer.title}
          </Label>
        </li>
      ))}
    </ul>
  </div>
)
