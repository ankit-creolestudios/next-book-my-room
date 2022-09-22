import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import {
  getMyProfile,
  getUserById,
  removeUser,
  updateUser,
} from "../../../controllers/authController";

const handler = nc();
dbConnect();

handler.get(getMyProfile);
handler.get(getUserById);
handler.put(updateUser);
handler.delete(removeUser);
export default handler;
