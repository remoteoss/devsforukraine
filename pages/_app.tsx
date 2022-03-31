import { SessionProvider, signOut } from "next-auth/react"
import type { AppProps } from "next/app"

import { useEffect } from "react"
import { URLModal } from "react-url-modal"
import DonateModal from "../components/DonateModal"
import { SEO } from "../components/SEO"
import "./styles.css"

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // I need this for being able to sign out locally
    // @ts-ignore
    window.signOut = signOut
  }, [])

  return (
    <>
      <SEO />
      <URLModal
        adapter="nextjs"
        modals={{
          donate: DonateModal,
        }}
      />
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
