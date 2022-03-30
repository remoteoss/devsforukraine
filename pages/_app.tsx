import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import Head from "next/head"
import { SEO } from "../components/SEO"
import "./styles.css"

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO />
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
