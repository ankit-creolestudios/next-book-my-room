import moment from "moment";
import HomeRoom from "../components/HomeRoom";

export default function Home() {
  return (
    <>
      <HomeRoom />
    </>
  );
}
// export const gerServerSideProps = wrapper.getServerSideProps(
//   (store) => async (req, res) => {
//     await store.dispatch(readRooms({ req, res }));
//     return {
//       props: {},
//     };
//   }
// );
