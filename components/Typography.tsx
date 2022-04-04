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
        "font-bold font-bossa text-[80px] text-white tracking-tight",
        className
      )}
    >
      {children}
    </h1>
  )
)

export const StatsHeader = React.forwardRef(
  ({ children, className }: Props["props"], ref: Props["ref"]) => (
    <h6
      /* @ts-ignore */
      ref={ref}
      className={classNames(
        "font-bold font-bossa text-[64px] text-white tracking-tight",
        className
      )}
    >
      {children}
    </h6>
  )
)

export const H2 = React.forwardRef(
  ({ children, className }: Props["props"], ref: Props["ref"]) => (
    <h2
      /* @ts-ignore */
      ref={ref}
      className={classNames(
        "font-bold font-bossa text-[40px] text-white leading-[1.4]",
        className
      )}
    >
      {children}
    </h2>
  )
)

export const H3 = React.forwardRef(
  ({ children, className }: Props["props"], ref: Props["ref"]) => (
    <h3
      /* @ts-ignore */
      ref={ref}
      className={classNames(
        "text-white font-[500] leading-[1.4] font-bossa text-2xl",
        className
      )}
    >
      {children}
    </h3>
  )
)

export const TalkName = React.forwardRef(
  ({ children, className }: Props["props"], ref: Props["ref"]) => (
    <span
      /* @ts-ignore */
      ref={ref}
      className={classNames("font-bossa text-white font-[500]", className)}
    >
      {children}
    </span>
  )
)
export const SubHeadlineLarge = React.forwardRef(
  ({ children, className }: Props["props"], ref: Props["ref"]) => (
    <p
      /* @ts-ignore */
      ref={ref}
      className={classNames(
        "font-light text-xl text-white leading-[1.6]",
        className
      )}
    >
      {children}
    </p>
  )
)

export const SubHeadlineXL = React.forwardRef(
  ({ children, className }: Props["props"], ref: Props["ref"]) => (
    <p
      /* @ts-ignore */
      ref={ref}
      className={classNames(
        "font-extralight text-2xl text-white leading-[1.7]",
        className
      )}
    >
      {children}
    </p>
  )
)

export const Body = React.forwardRef(
  ({ children, className }: Props["props"], ref: Props["ref"]) => (
    <p
      /* @ts-ignore */
      ref={ref}
      className={classNames("text-white leading-[1.8]", className)}
    >
      {children}
    </p>
  )
)

export const Label = React.forwardRef(
  ({ children, className }: Props["props"], ref: Props["ref"]) => (
    <p
      /* @ts-ignore */
      ref={ref}
      className={classNames("text-white text-[13px] leading-[1.5]", className)}
    >
      {children}
    </p>
  )
)

export const MotionH1 = motion(H1)
export const MotionH2 = motion(H2)
export const MotionH4 = motion(H3)
export const MotionLabel = motion(Label)
export const MotionBody = motion(Body)
export const MotionSubHeadlineLarge = motion(SubHeadlineLarge)
export const MotionSubHeadlineXL = motion(SubHeadlineXL)
