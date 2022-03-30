import { useSession } from "next-auth/react"
import { RegisterWithGhButton } from "../GithubButton"

export const Hero = () => {
  const { data: session } = useSession()
  return (
    <div className="flex items-center gap-4 h-screen justify-center flex-col">
      <div
        style={{
          backgroundImage: `url("/hands.png")`,
        }}
        className="absolute w-screen h-screen inset-0 bg-cover bg-center bg-no-repeat -z-[1]"
      ></div>
      <h1 className="text-3xl text-center">
        Devs For{" "}
        <span className="block text-[88px] mt-6 font-extrabold">Ukraine</span>
      </h1>
      <h2 className="mt-8 font-mono text-devs-gray100 text-center sm:text-left">
        Free Engineering Conference on{" "}
        <span className="text-white">April 25, 26 2022</span>
      </h2>
      {!session && <RegisterWithGhButton />}
    </div>
  )
}
