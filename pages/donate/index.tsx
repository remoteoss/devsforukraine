import { GetServerSideProps } from "next"

const Donate = () => null

export default Donate
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    redirect: {
      destination: "/?modal=donate",
      permanent: false,
    },
  }
}
