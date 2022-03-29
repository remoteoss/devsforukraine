export const Hero = () => (
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
    <h2 className="mt-8 font-mono text-devs-gray100">
      Free Engineering Conference on{" "}
      <span className="text-devs-blue">April 25, 26</span> 2022
    </h2>
  </div>
)
