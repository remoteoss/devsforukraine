import confetti from "canvas-confetti"
import { useEffect } from "react"
import { Body, H1 } from "../Typography"
import { Logo } from "../Logo"
import { realisticConfetti } from "../../utils/confetti"

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
    particleCount: Math.floor(200 * 0.25),
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
      <Logo width="166" height="auto" />
      <H1>Thank you</H1>
      <Body className="!text-devs-gray100 max-w-[420px]">
        We are grateful to have your support, your donation will allow use to
        accomplish more. Together we are making a difference!
      </Body>
    </div>
  )
}
