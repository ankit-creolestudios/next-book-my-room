import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import RoomDetail from "../../components/room/RoomDetail";
import { checkBookingDates } from "../../redux/feature/bookingSlice";
import { readRoomsById } from "../../redux/feature/roomSlice";
import { wrapper } from "../../redux/store";

const SingleRoom = () => {
  const state = useSelector((state) => state?.rooms);
  const bookingDate = useSelector((state) => state.bookings);
  return (
    <>
      <RoomDetail
        roomDetail={state?.room}
        dates={bookingDate?.dates?.bookingDates}
      />
    </>
  );
};

export default SingleRoom;
export const getServerSideProps = wrapper.getServerSideProps(
  (store, context) =>
    async ({ req, res, query }) => {
      await store.dispatch(readRoomsById({ id: query.id }));
      await store.dispatch(checkBookingDates({ id: query.id }));
      return {};
    }
);

// export const getServerSideProps = async ({ query }) => {
//   const { id } = query;
//   return {
//     props: {
//       id: id,
//     },
//   };
// };
