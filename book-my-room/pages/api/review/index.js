import nc from "next-connect";
import onError from "../../../middlewares/error";
import dbConnect from "../../../config/dbConnect";
import { getRoomReviews, newReview } from "../../../controllers/roomController";

const handler = nc({ onError });
dbConnect();

handler.get(getRoomReviews);
handler.post(newReview);
export default handler;
