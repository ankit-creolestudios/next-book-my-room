import { Space, Table, Tag } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeRoom } from "../../redux/feature/roomSlice";
import { getAdminUsers } from "../../redux/feature/userSlice";

const UserTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdminUsers());
  }, []);
  const state = useSelector((state) => state.usersPv);
  console.log(state);
  const columns = [
    { title: "User ID", dataIndex: "_id", key: "_id" },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    //   render: (_, { images }) => (
    //     <img
    //       src={images[0].url}
    //       style={{ width: "100px", height: "100px" }}
    //       alt="..."
    //     />
    //   ),
    },
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
        dataSource={state?.users?.users}
      />
    </div>
  );
};

export default UserTable;
