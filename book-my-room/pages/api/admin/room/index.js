import nc from "next-connect";
import onError from "../../../../middlewares/error";
import dbConnect from "../../../../config/dbConnect";
import { getAllRooms, newRoom } from "../../../controllers/roomController";
import { cloudinaryConnect } from "../../../config/cloudConnect";
import { getAllAdminRoom } from "../../../../controllers/roomController";

const handler = nc({ onError });
dbConnect();

handler.get(getAllAdminRoom);
export default handler;
