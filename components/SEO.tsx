import Head from "next/head"

export const SEO = () => (
  <Head>
    {/* COMMON TAGS */}
    <meta charSet="utf-8" />
    <title>Devs for Ukraine</title>
    {/* Search Engine */}
    <meta
      name="description"
      content="Supporting Ukraine through a free engineering Conference on April 25 and 26, 2022"
    />
    <meta
      name="image"
      content="https://www.devsforukraine.io/banner.jpg"
    ></meta>
    {/* Schema.org for Google */}
    <meta itemProp="name" content="Devs for Ukraine" />
    <meta
      itemProp="description"
      content="Supporting Ukraine through a free engineering Conference on April 25 and 26, 2022"
    />
    <meta
      itemProp="image"
      content="https://www.devsforukraine.io/banner.jpg"
    ></meta>
    {/* Twitter */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Devs for Ukraine" />
    <meta
      name="twitter:description"
      content="Supporting Ukraine through a free engineering Conference on April 25 and 26, 2022"
    />
    <meta
      name="twitter:image:src"
      content="https://www.devsforukraine.io/banner.jpg"
    ></meta>
    {/* Open Graph general (Facebook, Pinterest & Google+) */}
    <meta name="og:title" content="Devs for Ukraine" />
    <meta
      name="og:description"
      content="Supporting Ukraine through a free engineering Conference on April 25 and 26, 2022"
    />
    <meta name="og:url" content="https://www.devsforukraine.io/" />
    <meta name="og:site_name" content="Devs for Ukraine" />
    <meta name="og:type" content="website" />
    <meta
      name="og:image"
      content="https://www.devsforukraine.io/banner.jpg"
    ></meta>
    {/* Favicon */}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
)
