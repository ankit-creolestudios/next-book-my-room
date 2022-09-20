import nc from "next-connect";
import onError from "../../../middlewares/error";
import dbConnect from "../../../config/dbConnect";
import { getAllRooms, newRoom } from "../../../controllers/roomController";

const handler = nc({ onError });
dbConnect();

handler.get(getAllRooms);
handler.post(newRoom);
export default handler;
