export const PAYMENT_STEPS = {
    CANCEL: "CANCEL",
    FINAL: "FINAL",
}

export const HEADER_HEIGHT = 112

export const DEFAULT_MOTION = (transition: any = { delay: .1 }) => ({
    initial: { y: 50, opacity: 0 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: .3, ...transition },
})