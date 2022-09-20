import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { forgotPassword } from "../../../controllers/authController";
const handler = nc();
dbConnect();

handler.post(forgotPassword);
export default handler;
