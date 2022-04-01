import React from "react"

export const H1 = ({ children }: { children: any }) => (
  <h1 className="font-bold font-bossa text-[80px] text-white">{children}</h1>
)

export const MutedP = ({ children }: { children: any }) => (
  <p className="text-devs-gray100 text-center max-w-[550px]">{children}</p>
)
