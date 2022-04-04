import Head from "next/head"
import { useRouter } from "next/router"

export const SEO = () => {
  const router = useRouter()
  const isTicketPage = router.pathname === "/tickets/[username]"
  const banner = "https://www.devsforukraine.io/banner.png"
  return (
    <Head>
      {/* COMMON TAGS */}
      <meta charSet="utf-8" />
      <title>Devs for Ukraine</title>
      {/* Search Engine */}
      <meta
        name="description"
        content="Supporting Ukraine through a free engineering Conference on April 25 and 26, 2022"
      />
      {!isTicketPage && <meta name="image" content={banner}></meta>}
      {/* Schema.org for Google */}
      <meta itemProp="name" content="Devs for Ukraine" />
      <meta
        itemProp="description"
        content="Supporting Ukraine through a free engineering Conference on April 25 and 26, 2022"
      />
      {!isTicketPage && <meta itemProp="image" content={banner}></meta>}
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:title" content="Devs for Ukraine" />
      <meta
        name="twitter:description"
        content="Supporting Ukraine through a free engineering Conference on April 25 and 26, 2022"
      />
      {!isTicketPage && <meta name="twitter:image:src" content={banner}></meta>}
      {/* Open Graph general (Facebook, Pinterest & Google+) */}
      <meta name="og:title" content="Devs for Ukraine" />
      <meta
        name="og:description"
        content="Supporting Ukraine through a free engineering Conference on April 25 and 26, 2022"
      />
      <meta name="og:url" content="https://www.devsforukraine.io/" />
      <meta name="og:site_name" content="Devs for Ukraine" />
      <meta name="og:type" content="website" />
      {!isTicketPage && <meta name="og:image" content={banner}></meta>}
      {/* Favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}
