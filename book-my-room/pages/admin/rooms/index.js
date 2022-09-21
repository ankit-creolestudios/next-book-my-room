import React from "react";
import RoomTable from "../../../components/admin/RoomTable";
import { readRooms } from "../../../redux/feature/roomSlice";
import { wrapper } from "../../../redux/store";

const AdminRoom = () => {
  return <RoomTable />;
};

export default AdminRoom;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      await store.dispatch(readRooms(req));
    }
);
