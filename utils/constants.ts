import confetti from "canvas-confetti"

export const PAYMENT_STEPS = {
    CANCEL: "CANCEL",
    FINAL: "FINAL",
}

export const HEADER_HEIGHT = 112

export const USDFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
})

export const DEFAULT_MOTION = (transition: any = { delay: .1 }) => ({
    initial: { y: 32, opacity: 0 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: .8, ease: "easeInOut", ...transition },
})
export const GOAL = 100000 // 10s0k EUR

export const DEFAULT_CONFETTI = (el: HTMLElement) => confetti({
    colors: ["#E7CD54", "#2797FA"],
    particleCount: 50,
    shapes: ["square"],
    origin: {
        y: el?.getBoundingClientRect().top / window.innerHeight,
        x: el?.getBoundingClientRect().left / window.innerWidth,
    },
})
