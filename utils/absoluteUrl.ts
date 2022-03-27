import { GetServerSidePropsContext } from "next"

export const getAbsoluteURL = (req: GetServerSidePropsContext["req"]) => {
    const protocol = req.headers["x-forwarded-proto"] || "http"
    const baseUrl = req ? `${protocol}://${req.headers.host}` : ""
    return baseUrl
}
