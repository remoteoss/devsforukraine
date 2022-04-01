import { useRouter } from "next/router"
import confetti from "canvas-confetti"
import { useEffect, useRef } from "react"
import { H1, MutedP } from "../Typography"
import { Logo } from "../Logo"

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min
}
var count = 200
var defaults = {
  colors: ["#E7CD54", "#2797FA"],

  shapes: ["square"],
  origin: { y: 0.7 },
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
function fire(particleRatio: number, opts: any) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  )
}
const realistic = () => {
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  })
  fire(0.2, {
    spread: 60,
  })
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  })
}

function printMousePos(event: any) {
  applyCursorRippleEffect(event)
  confetti({
    colors: ["#E7CD54", "#2797FA"],
    particleCount: Math.floor(count * 0.25),
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
    realistic()
    realistic()

    document.addEventListener("click", printMousePos)

    return () => {
      document.removeEventListener("click", printMousePos)
    }
  }, [])

  return (
    <div className="h-screen w-full flex items-center justify-center text-center flex-col gap-6 select-none cursor-pointer">
      <Logo width="166" />
      <H1>Thank you</H1>
      <MutedP>
        We are grateful to have your support, your donation will allow use to
        accomplish more. Together we are making a difference!
      </MutedP>
    </div>
  )
}
