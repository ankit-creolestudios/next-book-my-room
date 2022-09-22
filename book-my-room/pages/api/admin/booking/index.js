import nc from "next-connect";
import onError from "../../../../middlewares/error";
import dbConnect from "../../../../config/dbConnect";
import { getAdminUsers } from "../../../../controllers/authController";
import { getAdminBookings } from "../../../../controllers/bookingController";
// import { isAuthenticatUser } from "../../../../middlewares/auth";

const handler = nc({ onError });
dbConnect();

handler
  // .use(isAuthenticatUser)
  .get(getAdminBookings);
export default handler;
