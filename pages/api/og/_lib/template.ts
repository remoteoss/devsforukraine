import { Ticket } from "../../../../components/Tickets"
import ReactDOMServer from "react-dom/server"
import React from "react"
import { bossaFont } from "./bossa"

function getCss() {
  return `
  ${bossaFont}
    body {
        background-color: #141414;
        color: rgb(249 250 251);
        height: 100vh;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
    }`
}

export function getHtml(parsedReq: any) {
  var ticketElement = React.createElement(Ticket, parsedReq)
  const htmlString = ReactDOMServer.renderToStaticMarkup(ticketElement)

  /*html*/
  return `
  <!DOCTYPE html>
<html>
  <script src="https://cdn.tailwindcss.com"></script>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="preconnect" href="https://rsms.me" crossorigin="true" />
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  <style>
    ${getCss()}
  </style>
 <script>
 tailwind.config = {
   theme: {
     extend: {
      colors: {
        devs: {
          black: "#141414",
          yellow: "#E7CD54",
          blue: "#2797FA",
          gray400: "#1B1A1A",
          gray300: "#232121",
          gray200: "#2E2D2D",
          gray100: "#76787E",
        },
      },
      fontFamily: {
        sans: ["Inter var"],
        bossa: "Bossa",
      },
     }
   }
 }
</script>
  <body>
    <div class="relative" style="transform: scale(2.5)">
    <h1 className="text-[40px] font-bold mb-6 text-center" style="font-family: Bossa">
    ${parsedReq.username} is attending Devs For Ukraine!
  </h1>
      ${htmlString}
    </div>
  </body>
</html>
`
}
