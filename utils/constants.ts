export const PAYMENT_STEPS = {
    CANCEL: "CANCEL",
    FINAL: "FINAL",
}

export const HEADER_HEIGHT = 112

export const DEFAULT_MOTION = (transition: any = { delay: .1 }) => ({
    initial: { y: 32, opacity: 0 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: .8, ease: "easeInOut", ...transition },
})
export const GOAL = 60000 // 40k EUR
