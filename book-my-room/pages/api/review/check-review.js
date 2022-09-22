import nc from "next-connect";
import onError from "../../../middlewares/error";
import dbConnect from "../../../config/dbConnect";
import { checkReviewAvailability } from "../../../controllers/roomController";

const handler = nc({ onError });

dbConnect();
handler.get(checkReviewAvailability);

export default handler;
