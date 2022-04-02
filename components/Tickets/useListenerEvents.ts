import { useEffect } from "react"
import { PERSPECTIVE, TICKET_HEIGHT, TICKET_WIDTH } from "./constants"
import { mousedown, mouseout, mouseUp } from "./utils"

export const useListenerEvents = ({ wrapper }: { wrapper: any }) => {
    useEffect(() => {
        const el = wrapper.current as unknown as HTMLElement
        if (wrapper.current) {
            el.addEventListener("mouseup", () => mouseUp(el))
            el.addEventListener("mousedown", () => mousedown(el))
            el.addEventListener("mouseout", () => mouseout(el))
            el.addEventListener("mousemove", handleMove)
        }

        return () => {
            el.removeEventListener("mouseup", () => mouseUp(el))
            el.removeEventListener("mousedown", () => mousedown(el))
            el.removeEventListener("mouseout", () => mouseout(el))
            el.removeEventListener("mousemove", handleMove)
        }
    })

    function handleMove(e: MouseEvent & { layerX?: number; layerY?: number }) {
        const el = wrapper.current as unknown as HTMLElement

        const xVal = e.layerX || 0
        const yVal = e.layerY || 0
        const yRotation = 20 * ((xVal - TICKET_WIDTH / 2) / TICKET_WIDTH)
        const xRotation = -20 * ((yVal - TICKET_HEIGHT / 2) / TICKET_HEIGHT)

        el.style.transform = `perspective(${PERSPECTIVE}) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
    }
}