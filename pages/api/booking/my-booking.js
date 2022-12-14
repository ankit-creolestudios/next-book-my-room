import nc from "next-connect";
import onError from "../../../middlewares/error";
import dbConnect from "../../../config/dbConnect";
import { myBookingDetail } from "../../../controllers/bookingController";

const handler = nc({ onError });

dbConnect();
handler.get(myBookingDetail);
export default handler;
