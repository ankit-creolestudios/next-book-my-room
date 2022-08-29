import Head from "next/head";
import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { readRoomsById } from "../../redux/feature/roomSlice";

const RoomDetail = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readRoomsById({ id }));
  }, []);
  const roomDetail = useSelector((state) => state.rooms?.room);
  return (
    <>
      <Head>
        <title>{roomDetail?.name} - Book My Room</title>
      </Head>

      <div className="container container-fluid">
        <h2 className="mt-5">{roomDetail.name}</h2>
        <p>{roomDetail?.address}</p>

        <div className="ratings mt-auto mb-3">
          <div className="rating-outer">
            <div
              className="rating-inner"
              style={{ width: `${(roomDetail?.ratings / 5) * 100}%` }}
            ></div>
          </div>
          <span id="no_of_reviews">({roomDetail?.numOfReviews} Reviews)</span>
        </div>
        <Carousel hover="pause">
          {roomDetail.images &&
            roomDetail.images.map((image) => (
              <Carousel.Item key={image.public_id}>
                <div style={{ width: "100%", height: "440px" }}>
                  <img
                    className="d-block m-auto"
                    src={image.url}
                    // alt={roomDetail.name}
                    // layout="fill"
                  />
                </div>
              </Carousel.Item>
            ))}
        </Carousel>

        <div className="row my-5">
          <div className="col-12 col-md-6 col-lg-8">
            <h3>Description</h3>
            <p>{roomDetail.description}</p>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="booking-card shadow-lg p-4">
              <p className="price-per-night">
                <b>${roomDetail.pricePerNight}</b> / night
              </p>

              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetail;
