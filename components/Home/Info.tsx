import classNames from "classnames"
import { Fragment } from "react"
import { balance } from "../../utils/types"
import { H2 } from "../Typography"
import { DonationProgress } from "./DonationProgress"

type Props = { balance: balance }

const info = [
  {
    top: 8,
    bottom: "Speakers Front End",
  },
  {
    top: "15K",
    bottom: "Donation goal",
  },
  {
    top: 8,
    bottom: "Back End Speakers",
  },
]

export const Info = ({ balance }: Props) => (
  <div className="flex items-center gap-4 min-h-screen flex-col mt-[160px]  ">
    <div className="sm:flex items-center pb-[160px] border-b-[1px] border-b-white border-solid border-opacity-20">
      {info.map((item, index) => (
        <Fragment key={index}>
          <div
            className={classNames(
              "flex flex-col text-center mb-6 sm:mb-0",
              index !== info.length - 1 && "sm:pr-16",
              index !== 0 && "sm:ml-16"
            )}
          >
            <span className="font-bold text-[64px] font-bossa">{item.top}</span>
            <span
              className={classNames(
                index === 1 ? "text-devs-yellow" : "text-devs-blue"
              )}
            >
              {item.bottom}
            </span>
          </div>
          {index !== info.length - 1 && (
            <div
              className="hidden sm:block w-[1px] h-[40px]"
              style={{
                background: "rgba(255, 255, 255, 0.24)",
              }}
            ></div>
          )}
        </Fragment>
      ))}
    </div>
    <div className="mt-28">
      <H2>Charity Event</H2>
    </div>
    <DonationProgress {...balance} />
  </div>
)
