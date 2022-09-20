import nc from "next-connect";
import onError from "../../../middlewares/error";
import dbConnect from "../../../config/dbConnect";
import { newBooking } from "../../../controllers/bookingController";

const handler = nc({ onError });

dbConnect();
handler.post(newBooking);
export default handler;
