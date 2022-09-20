import nc from "next-connect";
import onError from "../../../../middlewares/error";
import dbConnect from "../../../../config/dbConnect";
import { checkRoomBookDates } from "../../../../controllers/bookingController";

const handler = nc({ onError });

dbConnect();
handler.get(checkRoomBookDates);
export default handler;
