import moment from "moment";
import Head from "next/head";
import React, { useEffect } from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { readRoomsById } from "../../redux/feature/roomSlice";

const RoomDetail = ({ roomDetail, dates }) => {
  const dispatch = useDispatch();
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [daysOfStay, setDaysOfStay] = useState();
  const excludedDates = [];
  dates.forEach((date) => {
    excludedDates.push(new Date(date));
  });
  const onChange = (dates) => {
    const [checkInDate, checkOutDate] = dates;

    setCheckInDate(checkInDate);
    setCheckOutDate(checkOutDate);

    if (checkInDate && checkOutDate) {
      // Calclate days of stay

      const days = Math.floor(
        (new Date(checkOutDate) - new Date(checkInDate)) / 86400000 + 1
      );

      setDaysOfStay(days);

      dispatch(
        checkBooking(id, checkInDate.toISOString(), checkOutDate.toISOString())
      );
    }
  };

  console.log(checkInDate, checkOutDate);
  return (
    <>
      <Head>
        <title>{roomDetail.name} -Noyo Room</title>
      </Head>

      <div className="container container-fluid">
        <div>
          <h2 className="mt-5">{roomDetail.name}</h2>
          <p>{roomDetail?.address}</p>

          <div className="ratings">
            <div>{roomDetail?.numOfReviews} Reviews</div>
          </div>
        </div>

        <Carousel hover={"pause"}>
          {roomDetail.images?.map((image) => {
            return (
              <Carousel.Item key={image.public_id}>
                <div
                  style={{
                    width: "100%",
                    minHeight: "600px",
                    height: "100%",
                  }}
                >
                  <img src={image.url} className="d-block m-auto rounded" />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>

        <div className="row my-5">
          <div className="col-12 col-md-6 col-lg-8">
            <h3>Description</h3>
            <p>{roomDetail.description}</p>
            {/* <RoomFeatures room={room} /> */}
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="booking-card shadow-lg p-4">
              <p className="price-per-night">
                <b>${roomDetail.pricePerNight}</b> / night
              </p>
              <hr />
              <p className="mt-5 mb-3">Pick Check In & Check Out Date</p>
              <ReactDatePicker
                className="w-100"
                selected={checkInDate}
                onChange={onChange}
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={new Date()}
                excludeDates={excludedDates}
                selectsRange
                inline
              />
              {/* <DatePicker
                className="w-100"
                format={"DD-MM-YYYY"}
                disabledDate={(current) =>
                  current.isBefore(moment().subtract(1, "day"))
                }
                // selected={checkInDate}
                onChange={onChange}
                // startDate={checkInDate}
                // endDate={checkOutDate}
                // minDate={new Date()}
                // excludeDates={excludedDates}
                // selectsRange
                // inline
              /> */}
              {/* {available === true && (
                <div className="alert alert-success my-3 font-weight-bold">
                  Room is available. Book now.
                </div>
              )}

              {available === false && (
                <div className="alert alert-danger my-3 font-weight-bold">
                  Room not available. Try different dates.
                </div>
              )}

              {available && !user && (
                <div className="alert alert-danger my-3 font-weight-bold">
                  Login to book room.
                </div>
              )}

              {available && user && (
                <button
                  className="btn btn-block py-3 booking-btn"
                  onClick={() => bookRoom(room._id, room.pricePerNight)}
                  disabled={bookingLoading || paymentLoading ? true : false}
                >
                  Pay - ${daysOfStay * room.pricePerNight}
                </button>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetail;
