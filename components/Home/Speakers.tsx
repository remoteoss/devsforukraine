import { backendSpeakers, frontendSpeakers } from "../../utils/speakers"

export const Speakers = () => (
  <div className="flex items-center gap-4 min-h-screen flex-col pt-16">
    <h6 className="text-devs-yellow text-sm pb-4 m-0">The line up</h6>
    <h5 className="font-semibold text-4xl">Meet the speakers</h5>
    <p className="w-[400px] text-center text-devs-gray100">
      Our panel of speakers include professionals from all industries around the
      world.
    </p>
    <h6 className="block mt-20 text-devs-gray100 text-2xl font-light mb-11">
      Front End
    </h6>
    <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-28 grid-cols-1">
      {frontendSpeakers.map((speaker) => (
        <li key={speaker.name} className="flex items-center">
          <img
            src={`/speakers/${speaker.pic}`}
            alt={speaker.name}
            className="w-16 h-16 rounded-full mr-6"
          />
          <div className="flex flex-col">
            <span>{speaker.name}</span>
            <a
              className="text-devs-blue pt-1"
              href={`https://twiter.com/${speaker.twitter}`}
            >
              @{speaker.twitter}
            </a>
          </div>
        </li>
      ))}
    </ul>
    <h6 className="block mt-20 text-devs-gray100 text-2xl font-light mb-11">
      Back End
    </h6>
    <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-28 grid-cols-1">
      {backendSpeakers.map((speaker) => (
        <li key={speaker.name} className="flex items-center">
          <img
            src={`/speakers/${speaker.pic}`}
            alt={speaker.name}
            className="w-16 h-16 rounded-full mr-6"
          />
          <div className="flex flex-col">
            <span>{speaker.name}</span>
            <a
              className="text-devs-blue pt-1"
              href={`https://twiter.com/${speaker.twitter}`}
            >
              @{speaker.twitter}
            </a>
          </div>
        </li>
      ))}
    </ul>
  </div>
)
