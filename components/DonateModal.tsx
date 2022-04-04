import { useMemo } from "react"
import { Dialog } from "@headlessui/react"
import { ArrowRightIcon, ByRemoteIcon, LoadingIcon } from "./Icons"
import Link from "next/link"
import { useDonate } from "../utils/hooks/useDonate"
import { SecondaryButton } from "./Buttons/Secondary"

export default function DonateModal({ onClose }: { onClose: () => void }) {
  const { setAmount, error, getPaymentLink, amount, loading } = useDonate()

  const isNotInt = useMemo(
    () => !!amount && parseFloat(amount) % 1 != 0,
    [amount]
  )

  return (
    <div>
      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title
          as="h3"
          className=" font-bossa text-4xl flex flex-col items-center mb-10"
        >
          Donate 🇺🇦
          <ByRemoteIcon />
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-gray-500 font-light leading-7">
            The <span className="text-white">funds collected</span> by Remote
            during the DevForUkraine event will be{" "}
            <span className="text-white">evenly divided</span> between {""}
            <Link href="/#ngos">
              <a className="text-devs-yellow underline">
                7 Non-Governmental Organizations
              </a>
            </Link>
            .
          </p>
          <form onSubmit={getPaymentLink}>
            <div className="hw-full min-h-[170px] bg-devs-gray400 mt-14 mb-10 rounded-xl border border-opacity-10 border-white flex items-center text-center justify-center flex-col focus-within:border-devs-yellow transition focus-within:shadow-yellow relative">
              <input
                type="number"
                step="1"
                placeholder="0"
                className="text-white transition text-5xl bg-transparent border-none w-full h-full outline-none text-center font-bossa p-0 focus:outline-none focus:border-none placeholder:text-white placeholder:text-opacity-20"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
              ></input>
              <span className="font-bossa text-devs-gray100"> $ USD</span>
              <span className="text-red-600 text-xs block mt-2 absolute bottom-4">
                {isNotInt ? "You can only donate in increments of 1" : null}
                {error}
              </span>{" "}
            </div>

            <div className="mt-5 sm:mt-6 flex justify-between">
              <SecondaryButton hideOnMobile={!!amount} onClick={onClose}>
                Cancel
              </SecondaryButton>
              {amount && (
                <button
                  className="bg-devs-yellow text-black px-6 py-3 rounded-md font-semibold text-xs gap-2 items-center inline-flex disabled:opacity-50"
                  type="submit"
                  disabled={isNotInt}
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
  )
}
