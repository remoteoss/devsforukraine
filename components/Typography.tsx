import classNames from "classnames"
import React from "react"

export const H1 = ({
  children,
  className,
}: {
  children: any
  className?: string
}) => (
  <h1
    className={classNames(
      "font-bold font-bossa text-[80px] text-white",
      className
    )}
  >
    {children}
  </h1>
)

export const MutedP = ({
  children,
  className,
}: {
  children: any
  className?: string
}) => (
  <p
    className={classNames(
      "text-devs-gray100 text-center max-w-[550px]",
      className
    )}
  >
    {children}
  </p>
)

export const H2 = ({
  children,
  className,
}: {
  children: any
  className?: string
}) => (
  <h1
    className={classNames(
      "font-bold font-bossa text-[40px] text-white",
      className
    )}
  >
    {children}
  </h1>
)

export const H4 = ({
  children,
  className,
}: {
  children: any
  className?: string
}) => (
  <MutedP className={classNames("font-light max-w-[555px] text-xl", className)}>
    {children}
  </MutedP>
)
