import { Dialog } from "@headlessui/react"
import { RegisterWithGithub } from "./Buttons/RegisterGitHub"

export default function SignInModal() {
  return (
    <div>
      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title
          as="h3"
          className=" font-bossa text-[40px] max-w-xs m-auto flex flex-col items-center mb-10"
        >
          Sign in with GitHub
        </Dialog.Title>
        <div className="flex justify-center">
          {" "}
          <RegisterWithGithub options={{ callbackUrl: "/ask-question" }} />
        </div>
      </div>
    </div>
  )
}
