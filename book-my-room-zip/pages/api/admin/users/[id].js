import nc from "next-connect";
import onError from "../../../../middlewares/error";
import dbConnect from "../../../../config/dbConnect";
import {
  getUserById,
  removeUser,
  updateUser,
} from "../../../../controllers/authController";
// import { isAuthenticatUser } from "../../../../middlewares/auth";

const handler = nc({ onError });
dbConnect();

handler
  // .use(isAuthenticatUser)
  .get(getUserById)
  .put(updateUser)
  .delete(removeUser);
export default handler;
