import { SessionProvider, signOut } from "next-auth/react"
import type { AppProps } from "next/app"
import { MotionConfig } from "framer-motion"
import { useEffect } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { URLModal } from "react-url-modal"
import DonateModal from "../components/DonateModal"
import { ModalWrapper } from "../components/ModalWrapper"
import { SEO } from "../components/SEO"
import SignInModal from "../components/SignInModal"
import "./styles.css"
import ScheduleModal from "../components/ScheduleModal"

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.

const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // I need this for being able to sign out locally
    // @ts-ignore
    window.signOut = signOut
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <MotionConfig reducedMotion="user">
          <SEO />
          <URLModal
            adapter="nextjs"
            modals={{
              signin: SignInModal,
              schedule: ScheduleModal,
            }}
            Wrapper={ModalWrapper}
          />

          <Component {...pageProps} />
        </MotionConfig>
      </SessionProvider>
    </QueryClientProvider>
  )
}
