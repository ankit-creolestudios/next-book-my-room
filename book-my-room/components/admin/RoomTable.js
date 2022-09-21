import { Space, Table, Tag } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeRoom } from "../../redux/feature/roomSlice";

const RoomTable = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rooms);
  const columns = [
    { title: "RoomId", dataIndex: "_id", key: "_id" },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price Per Night(₹)",
      dataIndex: "pricePerNight",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, { images }) => (
        <img
          src={images[0].url}
          style={{ width: "100px", height: "100px" }}
          alt="..."
        />
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, { _id }) => {
        return (
          <div>
            <div>
              <a className="mx-2 my-3" href={`/room/${_id}`}>
                <button className="btn btn-success">View</button>
              </a>
              <a className="mx-2 my-3" href="#">
                <button className="btn btn-primary">Edit</button>
              </a>
              <a
                className="mx-2 my-3"
                onClick={() => {
                  dispatch(removeRoom({ id: _id }));
                }}
              >
                <button className="btn btn-danger">Remove</button>
              </a>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="container">
      <Table
        className="admin__room__table"
        columns={columns}
        dataSource={state?.rooms}
      />
    </div>
  );
};

export default RoomTable;
