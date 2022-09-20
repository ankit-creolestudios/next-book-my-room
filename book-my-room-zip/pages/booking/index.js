import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyBooking from "../../components/booking/MyBooking";
import { myBooking } from "../../redux/feature/bookingSlice";
import { wrapper } from "../../redux/store";

const Bookings = ({ req }) => {
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(myBooking({ authCookie: req?.headers?.cookie, req: req }));
  }, []);
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div>
      MyBookings
      <div>
        <div>
          <MyBooking />
        </div>
      </div>
    </div>
  );
};

export default Bookings;

export const gerServerSideProps = wrapper.getServerSideProps(
  async ({ req, store }) => {
    await store.dispatch(
      myBooking({ authCookie: req.headers.cookie, req: req })
    );
    return {
      props: {
        req: req,
      },
    };
  }
);
