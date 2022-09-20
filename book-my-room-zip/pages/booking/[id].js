import { getSession } from "next-auth/react";
import React, { useEffect } from "react";
import BookingDetail from "../../components/booking/BookingDetail";
import { getBookingDetail } from "../../redux/feature/bookingSlice";
import { wrapper } from "../../redux/store";

const BookingDetails = ({ id }) => {
  return (
    <div>
      BookingDetails
      <div>
        <BookingDetail id={id} />
      </div>
    </div>
  );
};

export default BookingDetails;

export const getServerSideProps = async ({ params }) => {
  return {
    props: {
      id: params?.id,
    },
  };
};
