import nc from "next-connect";
import onError from "../../../../middlewares/error";
import dbConnect from "../../../../config/dbConnect";
import { getAdminUsers } from "../../../../controllers/authController";

const handler = nc({ onError });
dbConnect();

handler.get(getAdminUsers);
export default handler;
