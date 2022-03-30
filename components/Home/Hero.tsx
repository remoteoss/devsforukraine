import { HEADER_HEIGHT } from "../../utils/constants"
import { RegisterWithGhButton } from "../GithubButton"
import { HeartLogo } from "../Logo"

export const Hero = () => {
  return (
    <div
      className="flex items-center gap-4 justify-center flex-col"
      style={{
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
      }}
    >
      <div
        style={{
          backgroundImage: `url("/hands.png")`,
        }}
        className="absolute w-screen h-screen inset-0 bg-cover bg-center bg-no-repeat -z-[1]"
      ></div>
      <HeartLogo />
      <h1 className="text-3xl text-center mt-4">
        Devs For{" "}
        <span className="block text-[88px] mt-6 font-extrabold">Ukraine</span>
      </h1>
      <h2 className="mt-8 font-mono text-devs-gray100 text-center max-w-[450px] mb-8">
        Supporting Ukraine through a free engineering Conference on{" "}
        <span className="text-white">April 25 and 26, 2022</span>
      </h2>
      <RegisterWithGhButton />
    </div>
  )
}
