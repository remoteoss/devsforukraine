import { PERSPECTIVE } from "./constants"

export const mouseUp = (el: HTMLElement) =>
    (el.style.transform = `perspective(${PERSPECTIVE}) rotateX(0) rotateY(0)`)

export const mousedown = (el: HTMLElement) =>
    (el.style.transform = `perspective(${PERSPECTIVE})  rotateX(0) rotateY(0)`)
export const mouseout = (el: HTMLElement) =>
    (el.style.transform = `perspective(${PERSPECTIVE})  rotateX(0) rotateY(0)`)

export const getNumber = (number: number) => {
    if (number < 10) {
        return `000${number}`
    } else if (number < 100) {
        return `00${number}`
    } else if (number < 1000) {
        return `0${number}`
    } else {
        return `${number}`
    }
}