import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookingDetail } from "../../redux/feature/bookingSlice";

const BookingDetail = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookingDetail({ id: id }));
  }, [dispatch]);
  const state = useSelector((state) => state);
  return (
    <div>
      BookingDetail
      <div>
        <div className="container">
          <Row>
            {state.bookings?.booking && (
              <Col span={{ xs: 32, sm: 32, lg: 24 }}>
                <h3 className="mb-4">Booking Info</h3>
                <p>
                  <b>Check In:</b>{" "}
                  {new Date(
                    state.bookings.booking.bookingDetail?.checkInDate
                  ).toLocaleString("en-US")}
                </p>

                <p>
                  <b>Check Out:</b>{" "}
                  {new Date(
                    state.bookings.booking.bookingDetail?.checkOutDate
                  ).toLocaleString("en-US")}
                </p>

                <p>
                  <b>Days of Stay:</b>{" "}
                  {state.bookings.booking.bookingDetail?.daysOfStay}
                </p>

                <hr />
              </Col>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default BookingDetail;
