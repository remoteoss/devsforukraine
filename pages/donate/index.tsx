import { GetServerSideProps } from "next"

const Donate = () => null

export default Donate
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/?modal=donate",
      permanent: false,
    },
  }
}
