import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import { Session } from "../utils/types"
import { Menu, Popover, Transition } from "@headlessui/react"
import { Fragment } from "react"
import classNames from "classnames"

export default function Header() {
  const { data: session } = useSession() as { data: Session }
  const userNavigation = [
    { name: "Your Ticket", href: `/tickets/${session?.user?.username}` },
    { name: "Sign out", onClick: signOut },
  ]
  return (
    <header className="bg-black p-4 px-6">
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className="w-[80rem] max-w-[80%] mx-auto flex items-center justify-between">
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
          </ul>
        </nav>
        <p className={`nojs-show flex gap-4 items-center`}>
          {!session && (
            <Link href="/register">
              <a>Sign in</a>
            </Link>
          )}
          {session?.user && (
            <>
              <Menu as="div" className="ml-4 relative flex-shrink-0">
                <div>
                  <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !bg-transparent">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={session.user.image}
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
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) =>
                          item.href ? (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </a>
                          ) : (
                            item.onClick && (
                              <button
                                onClick={item.onClick}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "w-full block px-4 py-2 text-sm text-gray-700 text-left"
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
          )}
        </p>
      </div>
    </header>
  )
}
