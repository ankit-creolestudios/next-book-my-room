import React from "react";
import UserTable from "../../../components/admin/UserTable";
import { getAdminUsers } from "../../../redux/feature/userSlice";
import { wrapper } from "../../../redux/store";

const AdminUser = () => {
  return <UserTable />;
};

export default AdminUser;

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ req, res }) => {
//       await store.dispatch(getAdminUsers(req));
//     }
// );
