import Head from "next/head";
import Image from "next/image";
import HomeRoom from "../components/HomeRoom";
import Layout from "../components/Layout";
import { readRooms } from "../redux/feature/roomSlice";
import { wrapper } from "../redux/store";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <HomeRoom />
    </Layout>
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
