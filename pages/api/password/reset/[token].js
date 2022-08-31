import nc from "next-connect";
import dbConnect from "../../../../config/dbConnect";
import { resetPasssword } from "../../../../controllers/authController";
const handler = nc();
dbConnect();

handler.put(resetPasssword);
export default handler;
