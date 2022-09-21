import nc from "next-connect";
import onError from "../../../middlewares/error";
import dbConnect from "../../../config/dbConnect";
import { getAllRooms, newRoom } from "../../../controllers/roomController";
import { cloudinaryConnect } from "../../../config/cloudConnect";

const handler = nc({ onError });
dbConnect();

cloudinaryConnect;
handler.get(getAllRooms);
handler.post(newRoom);
export default handler;
