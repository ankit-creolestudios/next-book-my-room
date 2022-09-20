import nc from "next-connect";
import onError from "../../middlewares/error";
import dbConnect from "../../config/dbConnect";
import {
  checkRoomAvailability,
  newBooking,
} from "../../controllers/bookingController";

const handler = nc({ onError });

dbConnect();
handler.get(checkRoomAvailability);
export default handler;
