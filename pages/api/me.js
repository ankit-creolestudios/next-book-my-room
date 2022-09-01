/** @format */

import nc from "next-connect";
import dbConnect from "../../config/dbConnect";
import { currentUserProfile } from "../../controllers/authController";
import { isAuthenticatUser } from "../../middlewares/auth";
import onError from "../../middlewares/error";

const handler = nc({ onError });
dbConnect();

handler.use(isAuthenticatUser).get(currentUserProfile);
export default handler;
