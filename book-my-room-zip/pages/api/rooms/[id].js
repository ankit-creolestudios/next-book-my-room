import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import {
  getSingleRoom,
  removeRoom,
  updateRoom,
} from "../../../controllers/roomController";

const handler = nc();
dbConnect();

handler.get(getSingleRoom);
handler.put(updateRoom);
handler.delete(removeRoom);
export default handler;
