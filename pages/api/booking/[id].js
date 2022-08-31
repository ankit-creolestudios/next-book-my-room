import nc from "next-connect";
import onError from "../../../middlewares/error";
import dbConnect from "../../../config/dbConnect";
import {
  getBookingDetail,
  removeBooking,
} from "../../../controllers/bookingController";

const handler = nc({ onError });

dbConnect();
handler.get(getBookingDetail).delete(removeBooking);
export default handler;
