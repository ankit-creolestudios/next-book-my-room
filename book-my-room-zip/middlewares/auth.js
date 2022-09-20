/** @format */

import catchAsyncError from "./catchAsyncError";
import { ErrorHandler } from "../utils/errorHandler";
import { getSession } from "next-auth/react";
const isAuthenticatUser = catchAsyncError(async (req, res, next) => {
  const session = await getSession({ req });
  console.log(session, "aka");
  if (!session) {
    return next(new ErrorHandler("No user available", 400));
  }
  req.user = session.user;
  next();
});
export { isAuthenticatUser };
