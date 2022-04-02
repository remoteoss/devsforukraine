import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://rsms.me" crossOrigin="true" />

        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <script defer data-domain="devsforukraine.io" src="https://analytics.iamsaravieira.com/js/plausible.js"></script>
    </Html>
  )
}
