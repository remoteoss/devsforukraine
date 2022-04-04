import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useEffect, useState } from "react"

export const ModalWrapper = ({
  children,
  onClose,
}: {
  onClose: () => void
  children: React.ReactNode
}) => {
  const [show, setShow] = useState(false)
  const LEAVE = 200
  useEffect(() => {
    window.setTimeout(() => setShow(true))
  }, [])

  const closeModal = () => {
    setShow(false)
    window.setTimeout(() => onClose(), LEAVE)
  }
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-[100] inset-0 overflow-y-auto"
        onClose={closeModal}
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
              <RightSVG />
              <LeftSVG />
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

const RightSVG = () => (
  <svg
    className="absolute right-0 top-0"
    width="48"
    height="144"
    viewBox="0 0 48 144"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.0494241 141.26C0.408874 122.792 5.19857 103.824 19.1812 89.7137C28.0857 80.6904 39.4406 74.5347 51.8104 72.0249C39.4398 69.5174 28.0842 63.3614 19.1812 54.3362C5.84108 40.8746 0.485263 22.7912 0.0314555 5.29298C0.0314554 4.46751 1.59199e-07 3.64205 1.23315e-07 2.82111L0 0L8.05619 -3.52147e-07C9.11657 -3.98498e-07 10.177 0.022642 11.2373 0.0770689C26.8061 0.834509 42.4961 7.12989 54.2187 18.9632C66.6377 31.4995 72.9011 55.5562 73 71.9841L73 72.0476C72.9011 88.5072 66.6422 112.528 54.2142 125.073C42.2265 137.178 26.0782 143.483 10.1814 144L0.0494242 144L0.0494241 141.26ZM49.784 22.2968C49.784 22.3422 49.784 22.2968 49.784 22.2968V22.2968Z"
      fill="#1C1C1C"
    />
  </svg>
)

export const LeftSVG = () => (
  <svg
    className="absolute left-0 top-0"
    width="54"
    height="144"
    viewBox="0 0 54 144"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M53.9506 141.26C53.5911 122.792 48.8014 103.824 34.8188 89.7137C25.9143 80.6904 14.5594 74.5347 2.18963 72.0249C14.5602 69.5174 25.9158 63.3614 34.8188 54.3362C48.1589 40.8746 53.5147 22.7912 53.9685 5.29298C53.9685 4.46751 54 3.64205 54 2.82111L54 0L45.9438 -3.52147e-07C44.8834 -3.98498e-07 43.823 0.022642 42.7627 0.0770689C27.1939 0.834509 11.5039 7.12989 -0.218682 18.9632C-12.6377 31.4995 -18.9011 55.5562 -19 71.9841L-19 72.0476C-18.9011 88.5072 -12.6422 112.528 -0.214193 125.073C11.7735 137.178 27.9218 143.483 43.8186 144L53.9506 144L53.9506 141.26ZM4.21604 22.2968C4.21604 22.3422 4.21604 22.2968 4.21604 22.2968V22.2968Z"
      fill="#1C1C1C"
    />
  </svg>
)
