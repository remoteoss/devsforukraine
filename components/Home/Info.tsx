import classNames from "classnames"
import { balance } from "../../utils/types"
import { DonationProgress } from "./DonationProgress"

type Props = { balance: balance }

const info = [
  {
    top: 8,
    middle: "Speakers",
    bottom: "Front End",
  },
  {
    top: "15K €",
    middle: "Donation goal",
    bottom: "in support of Ukraine",
  },
  {
    top: 8,
    middle: "Speakers",
    bottom: "Back End",
  },
]

export const Info = ({ balance }: Props) => (
  <div className="flex items-center gap-4 min-h-screen flex-col pt-16">
    <div className="flex items-center">
      {info.map((item, index) => (
        <>
          <div
            className={classNames(
              "flex flex-col text-center",
              index !== info.length - 1 && "pr-16",
              index !== 0 && " ml-16"
            )}
          >
            <span className="font-bold text-[64px]">{item.top}</span>
            <span className="text-devs-gray100">{item.middle}</span>
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
              className="w-[1px] h-[40px]"
              style={{
                background: "rgba(255, 255, 255, 0.24)",
              }}
            ></div>
          )}
        </>
      ))}
    </div>
    <p className="text-center text-devs-gray100 text-2xl font-extralight mt-40">
      To <span className="text-white">support Ukraine</span> during this
      sensitive period, we organized an entirely free and remote conference.
      Over the course of <span className="text-white">two days</span>, you will
      get to{" "}
      <span className="text-white">listen and learn from professional</span>{" "}
      across the world covering the topics of{" "}
      <span className="text-white">front end</span> and{" "}
      <span className="text-white">back end engineering</span>.
    </p>
    <DonationProgress {...balance} />
  </div>
)
