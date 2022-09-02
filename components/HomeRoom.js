import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { readRooms } from "../redux/feature/roomSlice";
import RoomItem from "./room/RoomItem";

const HomeRoom = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readRooms());
  }, []);
  const router = useRouter();
  const rooms = useSelector((state) => state?.rooms?.rooms);
  // console.log(rooms);
  return (
    <section id="rooms" className="container mt-5">
      <h2 className="mb-3 ml-2 stays-heading">
        {/* {location ? `Rooms in ${location}` : "All Rooms"} */}
      </h2>

      {/* <Link href="/search">
        <a className="ml-2 back-to-search">
          <i className="fa fa-arrow-left"></i> Back to Search
        </a>
      </Link> */}

      <div className="row">
        {rooms && rooms.length === 0 ? (
          <div className="alert alert-danger mt-5 w-100">
            <b>No Rooms.</b>
          </div>
        ) : (
          rooms && rooms.map((room) => <RoomItem key={room._id} room={room} />)
        )}
      </div>
    </section>
  );
};

export default HomeRoom;
