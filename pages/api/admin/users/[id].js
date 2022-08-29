import nc from "next-connect";
import onError from "../../../../middlewares/error";
import dbConnect from "../../../../config/dbConnect";
import {
  getUserById,
  removeUser,
  updateUser,
} from "../../../../controllers/authController";

const handler = nc({ onError });
dbConnect();

handler.get(getUserById).put(updateUser).delete(removeUser);
export default handler;
