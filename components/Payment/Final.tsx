import confetti from "canvas-confetti"
import { useEffect } from "react"
import { MotionBody, MotionH1 } from "../Typography"
import { Logo } from "../Logo"
import { realisticConfetti } from "../../utils/confetti"
import { DEFAULT_MOTION } from "../../utils/constants"
import { motion } from "framer-motion"

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function applyCursorRippleEffect(e: any) {
  const ripple = document.createElement("div")

  ripple.className = "ripple"
  document.body.appendChild(ripple)

  ripple.style.left = `${e.clientX}px`
  ripple.style.top = `${e.clientY}px`
  ripple.style.animation = `ripple-effect .4s  linear`
  ripple.onanimationend = () => document.body.removeChild(ripple)
}

function applyClickConfetti(event: any) {
  applyCursorRippleEffect(event)
  confetti({
    colors: ["#E7CD54", "#2797FA"],
    particleCount: 50,
    shapes: ["square"],
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    origin: {
      y: event.clientY / window.innerHeight,
      x: event.clientX / window.innerWidth,
    },
  })
}

export const Final = () => {
  useEffect(() => {
    realisticConfetti()

    document.addEventListener("click", applyClickConfetti)

    return () => {
      document.removeEventListener("click", applyClickConfetti)
    }
  }, [])

  return (
    <div className="h-screen w-full flex items-center justify-center text-center flex-col gap-6 select-none cursor-pointer">
      <motion.div {...DEFAULT_MOTION()}>
        <Logo width="166" height="40" />
      </motion.div>
      <MotionH1 {...DEFAULT_MOTION({ delay: 0.2 })}>Thank you</MotionH1>
      <MotionBody
        {...DEFAULT_MOTION({ delay: 0.4 })}
        className="!text-devs-gray100 max-w-[420px]"
      >
        We are grateful to have your support, your donation will allow use to
        accomplish more. Together we are making a difference!
      </MotionBody>

      <MotionBody
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="!text-devs-gray100 italic fixed bottom-6 !font-extralight"
      >
        Click to pop confettis!
      </MotionBody>
    </div>
  )
}
