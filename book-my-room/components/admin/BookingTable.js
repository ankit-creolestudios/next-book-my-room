import { Space, Table, Tag } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminBooking } from "../../redux/feature/bookingSlice";
import { removeRoom } from "../../redux/feature/roomSlice";

const BookingTable = () => {
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(getAdminBooking());
  //   }, [dispatch]);
  const state = useSelector((state) => state.bookings?.bookings);
  console.log(state);
  const columns = [
    { title: "Booking ID", dataIndex: "_id", key: "_id" },
    {
      title: "Check In",
      dataIndex: "checkInDate",
      key: "checkIn",
      render: (_, { checkInDate }) => (
        <div>
          {moment().format("dddd, MMMM Do YYYY, h:mm:ss a", checkInDate)}
        </div>
      ),
    },
    {
      title: "Check Out",
      dataIndex: "checkOutDate",
      key: "checkOutDate",
      render: (_, { checkOutDate }) => (
        <div>
          {moment().format("dddd, MMMM Do YYYY, h:mm:ss a", checkOutDate)}
        </div>
      ),
    },
    {
      title: "Amount Paid",
      dataIndex: "amountPaid",
      key: "amount",
    },
    // {
    //   title: "Image",
    //   dataIndex: "image",
    //   key: "image",
    //   render: (_, { images }) => (
    //     <img
    //       src={images[0].url}
    //       style={{ width: "100px", height: "100px" }}
    //       alt="..."
    //     />
    //   ),
    // },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  return (
    <div className="container">
      <Table
        className="admin__room__table"
        columns={columns}
        dataSource={state?.booking}
      />
    </div>
  );
};

export default BookingTable;
