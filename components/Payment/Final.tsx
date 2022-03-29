import { useRouter } from "next/router"

export const Final = () => {
  const router = useRouter()
  console.log(router)
  return <pre>{JSON.stringify(router.query, null, 2)}</pre>
}
