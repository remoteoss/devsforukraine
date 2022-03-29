import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { Session } from "../utils/types"
import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import classNames from "classnames"
import { Logo } from "./Logo"
import { GitHub, Heart } from "./Icons"

export default function Header() {
  const { data: session } = useSession() as { data: Session }

  return (
    <header className="p-8 px-6 sticky top-0 z-20">
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className="w-[80rem] max-w-[80%] mx-auto flex flex-col sm:flex-row items-center sm:justify-between justify-center">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div className="flex gap-3 sm:mt-0 mt-4">
          <Link href="/donate">
            <a className="bg-devs-yellow text-devs-black px-4 py-2 rounded-md font-normal text-xs flex gap-2 items-center">
              <Heart width="20" />
              Donate
            </a>
          </Link>
          <p className={`nojs-show`}>
            {!session && (
              <button
                onClick={() => signIn("github")}
                className="bg-devs-gray200 px-4 py-2 rounded-md font-normal text-xs flex gap-2 items-center"
              >
                <GitHub width="20" />
                Sign in with Github
              </button>
            )}
            {session?.user && <UserNavigation session={session} />}
          </p>
        </div>
      </div>
    </header>
  )
}

export const UserNavigation = ({ session }: any) => {
  const userNavigation = [
    { name: "Your Ticket", href: `/tickets/${session?.user?.username}` },
    { name: "Sign out", onClick: signOut },
  ]
  return (
    <>
      <Menu as="div" className="ml-4 relative flex-shrink-0">
        <div>
          <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !bg-transparent">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full border-2 border-devs-gray100"
              src={session.user.image || ""}
              alt={session.user.username || session.user.name || ""}
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-devs-gray200 ring-1 ring-black ring-opacity-5 focus:outline-none">
            {userNavigation.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) =>
                  item.href ? (
                    <a
                      href={item.href}
                      className={classNames(
                        active ? "bg-devs-gray100" : "",
                        "block px-4 py-2 text-sm text-white"
                      )}
                    >
                      {item.name}
                    </a>
                  ) : (
                    item.onClick && (
                      <button
                        // @ts-ignore
                        onClick={item.onClick}
                        className={classNames(
                          active ? "bg-devs-gray100" : "",
                          "w-full block px-4 py-2 text-sm text-white text-left"
                        )}
                      >
                        {item.name}
                      </button>
                    )
                  )
                }
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}
