import { Dialog } from "@headlessui/react"
import { MotionLabel } from "./Typography"

const time = (hour: string) => new Date(`4/26/2022 ${hour} PM UTC`)

const BESchedule = [
  {
    time: time("4:00:00"),
    speaker: "Aaron Patterson",
    talk: "Almost on time ",
  },
  {
    time: time("4:40:00"),
    speaker: "Sandi Metz",
    talk: "If you build it, they will come",
  },
  {
    time: time("5:10:00"),
    speaker: "Break",
  },
  {
    time: time("5:20:00"),
    speaker: "Lilly Chen",
    talk: "Engineering For Startups",
  },
  {
    time: time("5:45:00"),
    speaker: "Andreas Klinger & Saša Jurić",
    talk: "Fireside Chat",
  },
  {
    time: time("6:30:00"),
    speaker: "Break",
  },
  {
    time: time("6:50:00"),
    speaker: "Tetiana Dushenkivska",
    talk: "Confident Elixir",
  },
  {
    time: time("7:30:00"),
    speaker: "Vittoria Bitton",
    talk: "Patterns for sanity",
  },
  {
    time: time("8:00:00"),
    speaker: "Break",
  },
  {
    time: time("8:20:00"),
    speaker: "José Valim",
    talk: "Q&A",
  },
  {
    time: time("9:00:00"),
    speaker: "Anjana Vakil",
    talk: "Opening Doors with Open Source",
  },
  {
    time: time("9:40:00"),
    speaker: "End",
  },
]

export default function ScheduleModal({ params: { day } }: any) {
  return (
    <div>
      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title
          as="h3"
          className=" font-bossa text-[40px] max-w-xs m-auto flex flex-col items-center mb-10"
        >
          Schedule
          <MotionLabel>All times are in your current timezone</MotionLabel>
        </Dialog.Title>
        <div className="flex justify-center">
          {day === 1 ? null : (
            <div className="">
              {BESchedule.map((s) => (
                <div
                  className="grid 
                  gap-x-2 grid-cols-[80px_1fr] text-left pb-3 my-3 border-b-[1px] border-devs-gray200"
                  key={s.talk}
                >
                  <div className="font-semibold">
                    {s.time.toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                  <div>
                    {s.speaker}

                    <span className="text-devs-gray100">
                      {" "}
                      {s.talk && " - "} {s.talk}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
