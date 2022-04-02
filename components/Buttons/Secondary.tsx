import classNames from "classnames"
import Link from "next/link"

const classes =
  "bg-devs-gray200 px-6 py-3 rounded-md hover:bg-devs-gray50 font-normal text-xs gap-2 items-center transition-colors"

type Props = {
  onClick?: () => void
  href?: string | { pathname: string; query?: any }
  children: React.ReactNode
  className?: string
  hideOnMobile?: boolean
  outsideWebsite?: boolean
  target?: string
  rel?: string
}

export const SecondaryButton = ({
  onClick,
  href,
  children,
  className,
  hideOnMobile,
  outsideWebsite,
  ...props
}: Props) => {
  if (href) {
    if (outsideWebsite && typeof href === "string") {
      return (
        <a
          className={classNames(
            classes,
            className,
            hideOnMobile ? "hidden sm:flex " : "flex"
          )}
          href={href}
          {...props}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} {...props}>
        <a
          className={classNames(
            classes,
            className,
            hideOnMobile ? "hidden sm:flex " : "flex"
          )}
        >
          {children}
        </a>
      </Link>
    )
  }

  if (onClick) {
    return (
      <button
        {...props}
        onClick={onClick}
        className={classNames(
          classes,
          className,
          hideOnMobile ? "hidden sm:flex " : "flex"
        )}
      >
        {children}
      </button>
    )
  }

  return null
}
