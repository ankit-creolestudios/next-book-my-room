import { useSelector } from "react-redux";
import HomeRoom from "../components/HomeRoom";
import { readRooms } from "../redux/feature/roomSlice";
import { wrapper } from "../redux/store";

export default function Home() {
  const state = useSelector((state) => state.rooms);
  return (
    <>
      <HomeRoom rooms={state} />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      await store.dispatch(readRooms(req));
    }
);
