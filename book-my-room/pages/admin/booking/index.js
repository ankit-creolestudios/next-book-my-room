import React from "react";
import BookingTable from "../../../components/admin/BookingTable";
import { getAdminBooking } from "../../../redux/feature/bookingSlice";
import { wrapper } from "../../../redux/store";

const AdminRoom = () => {
  return <BookingTable />;
};

export default AdminRoom;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      await store.dispatch(getAdminBooking(req));
    }
);
