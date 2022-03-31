/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { ArrowRightIcon, ByRemoteIcon, LoadingIcon } from "./Icons"
import Link from "next/link"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"

export default function DonateModal({ onClose }: { onClose: () => void }) {
  const [amount, setAmount] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { data: session } = useSession()
  const router = useRouter()

  const getPaymentLink = async (e: any) => {
    e.preventDefault()

    if (loading) return

    setLoading(true)
    setError("")

    fetch("api/payment/create-payment-link", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        email: session?.user?.email,
      }),
    })
      .then(async (res) => {
        const { session } = await res.json()

        router.push(session.url)
      })
      .catch(() => setError("Oops, can't generate donation link"))
      .finally(() => setLoading(false))
  }
  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-[100] inset-0 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-80 transition-opacity backdrop-blur-sm" />

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-devs-black rounded-xl px-4 pt-5 pb-4 text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-[550px] sm:w-full sm:p-8 text-white">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className=" font-bossa text-4xl flex flex-col items-center mb-10"
                  >
                    Donate
                    <ByRemoteIcon />
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-gray-500 leading-7">
                      The <span className="text-white">funds collected</span> by
                      Remote during the DevForUkraine event will be{" "}
                      <span className="text-white">evenly divided</span> between{" "}
                      {""}
                      <Link href="/#ngo">
                        <a className="text-devs-yellow underline">
                          7 Non-Governmental Organizations
                        </a>
                      </Link>
                      .
                    </p>
                    <form onSubmit={getPaymentLink}>
                      <div className="hw-full min-h-[170px] bg-devs-gray400 mt-14 mb-10 rounded-xl border border-opacity-10 border-white flex items-center text-center justify-center flex-col focus-within:border-devs-yellow transition">
                        <input
                          type="number"
                          step="1"
                          placeholder="0"
                          className="text-white transition text-5xl bg-transparent border-none w-full h-full outline-none text-center font-bossa p-0 focus:outline-none focus:border-none placeholder:text-white placeholder:text-opacity-20"
                          value={amount}
                          onChange={(event) => setAmount(event.target.value)}
                        ></input>
                        <span className="font-bossa text-devs-gray100">
                          {" "}
                          $ USD
                        </span>
                        <span className="text-red-600 text-xs block mt-2">
                          {error}
                        </span>{" "}
                      </div>

                      <div className="mt-5 sm:mt-6 flex justify-between">
                        <button
                          className="bg-devs-gray200 text-white px-6 py-3 rounded-md font-normal text-xs gap-2 items-center inline-flex"
                          onClick={onClose}
                        >
                          Cancel
                        </button>
                        {amount && (
                          <button
                            className="bg-devs-yellow text-black px-6 py-3 rounded-md font-semibold text-xs gap-2 items-center inline-flex"
                            type="submit"
                          >
                            Pay with Stripe
                            {loading ? (
                              <LoadingIcon width="16" height="16" />
                            ) : (
                              <ArrowRightIcon />
                            )}
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
