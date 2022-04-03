/* eslint-disable react/display-name */
import classNames from "classnames"
import React, { ForwardedRef } from "react"
import { motion } from "framer-motion"

type Props = {
  props: { className?: string; children: React.ReactNode }
  ref: ForwardedRef<unknown>
}

export const H1 = React.forwardRef(
  ({ children, className }: Props["props"], ref: Props["ref"]) => (
    <h1
      /* @ts-ignore */
      ref={ref}
      className={classNames(
        "font-bold font-bossa text-[80px] text-white",
        className
      )}
    >
      {children}
    </h1>
  )
)

export const MutedP = React.forwardRef(
  ({ children, className }: Props["props"], ref: Props["ref"]) => (
    <p
      /* @ts-ignore */
      ref={ref}
      className={classNames(
        "text-devs-gray100 text-center max-w-[550px]",
        className
      )}
    >
      {children}
    </p>
  )
)

export const H2 = React.forwardRef(
  ({ children, className }: Props["props"], ref: Props["ref"]) => (
    <h1
      /* @ts-ignore */
      ref={ref}
      className={classNames(
        "font-bold font-bossa text-[40px] text-white",
        className
      )}
    >
      {children}
    </h1>
  )
)

export const H4 = React.forwardRef(
  ({ children, className }: Props["props"], ref: Props["ref"]) => (
    <MutedP
      /* @ts-ignore */
      ref={ref}
      className={classNames("font-light max-w-[555px] text-xl", className)}
    >
      {children}
    </MutedP>
  )
)

export const MotionH1 = motion(H1)
export const MotionH2 = motion(H2)
export const MotionH4 = motion(H4)
export const MotionMutedP = motion(MutedP)
