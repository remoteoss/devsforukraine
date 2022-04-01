// import { readFileSync } from "fs";



function getCss() {
  return `
    body {
        background-color: rgb(15 23 42);
        color: rgb(249 250 251);
        height: 100vh;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
    }`;
}
const TICKET_WIDTH = 654
const TICKET_HEIGHT = 351
const bg = (name: string) =>
  name.split("")[0].toLowerCase() > "M" ? "#FFDD00" : "#0057B7";
const BG = (name: string) => `
      <svg
        width="${TICKET_WIDTH}"
        height="${TICKET_HEIGHT}"
        viewBox="0 0 654 351"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="relative -z-[1]"
        style="filter: drop-shadow(0px 3.11178px 50.5665px ${bg(name)}4d)"
      >
        <mask id="path-1-inside-1_2_6304" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M604 351H50C50 323.386 27.6142 301 0 301V50C27.6142 50 50 27.6142 50 0H604C604 27.6142 626.386 50 654 50V301C626.386 301 604 323.386 604 351Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M604 351H50C50 323.386 27.6142 301 0 301V50C27.6142 50 50 27.6142 50 0H604C604 27.6142 626.386 50 654 50V301C626.386 301 604 323.386 604 351Z"
          fill="#212134"
        />
        <path
          d="M50 351H44V357H50V351ZM604 351V357H610V351H604ZM0 301H-6V307H0V301ZM0 50V44H-6V50H0ZM50 0V-6H44V0H50ZM604 0H610V-6H604V0ZM654 50H660V44H654V50ZM654 301V307H660V301H654ZM50 357H604V345H50V357ZM0 307C24.3005 307 44 326.699 44 351H56C56 320.072 30.9279 295 0 295V307ZM-6 50V301H6V50H-6ZM44 0C44 24.3005 24.3005 44 0 44V56C30.9279 56 56 30.9279 56 0H44ZM604 -6H50V6H604V-6ZM654 44C629.699 44 610 24.3005 610 0H598C598 30.9279 623.072 56 654 56V44ZM660 301V50H648V301H660ZM610 351C610 326.699 629.699 307 654 307V295C623.072 295 598 320.072 598 351H610Z"
          fill="${bg(name)}"
          mask="url(#path-1-inside-1_2_6304)"
        />
        <path
          d="M502 6V345"
          stroke="#4A4A6A"
          stroke-width="3"
          stroke-dasharray="6 6"
        />
      </svg>
`;
const ghIcon = `
<svg
role="img"
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"
height="24"
                class="text-slate-500"
>
<title>GitHub</title>
<path
  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  fill="currentColor"
/>
</svg>
`;
export function getHtml(parsedReq: any) {
  const { image, name, username, registrationNumber } = parsedReq;
  /*html*/
  return `
  <!DOCTYPE html>
<html>
  <script src="https://cdn.tailwindcss.com"></script>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="preconnect" href="https://rsms.me" crossOrigin="true" />
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  <style>
    ${getCss()}
  </style>
  <body>
  <div class="relative" style="transform: scale(1.5)">
    <div
      class="relative m-auto flex justify-center block"
      style="width: ${TICKET_WIDTH}px; height: ${TICKET_HEIGHT}px; min-width: ${TICKET_WIDTH}px"
    >
      <div class="absolute">
        <div
          class="top-7 absolute left-12 w-[420px] flex flex-col justify-center align-center pb-[60px]"
        >
          <div class="flex align-center">
            <img
              class="w-[92px] h-[92px] rounded-full border-4 border-slate-700 mr-4"
              src="${image}"
              alt="${username}"
            />
            <div class="flex flex-col justify-center">
              <h2 class="font-semibold text-2xl pb-2">${name}</h2>
              <div class="flex items-center gap-2">
                ${ghIcon}
                <a href="https://github.com/${username}">
                  <h6 class="text-slate-500">${username}</h6>
                </a>
              </div>
            </div>
          </div>
          <div
            class="flex justify-between items-center mt-12 uppercase text-slate-500 font-semibold text-lg"
          >
            <h2>CONF LOGO</h2>
            <p>25 & 26 APRIL 2022</p>
          </div>
          <a
            href="https://devsforukraine.com"
            class="text-left text-slate-600 text-sm mt-2 font-semibold underline"
          >
            devsforukraine.com
          </a>
        </div>
        <div
          class="top-20 absolute right-10 w-[90px] transform rotate-90 text-6xl font-bold"
        >
          Nº${getNumber(registrationNumber)}
        </div>
        ${BG(name)}
      </div>
    </div>
    </div>
  </body>
</html>
`;
}
const getNumber = (number: number) => {
  if (number < 10) {
    return `000${number}`;
  } else if (number < 100) {
    return `00${number}`;
  } else if (number < 1000) {
    return `0${number}`;
  } else {
    return `${number}`;
  }
};
