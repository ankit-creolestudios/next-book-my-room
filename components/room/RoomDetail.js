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
  console.log(roomDetail);
  return (
    <>
      <Head>
        <title>{roomDetail?.name} -Noyo Room</title>
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
              <Carousel.Item>
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
