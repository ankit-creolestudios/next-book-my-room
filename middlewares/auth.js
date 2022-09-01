// import catchAsyncError from "./catchAsyncError";
// import { ErrorHandler } from "../utils/errorHandler";
// import { getSession } from "next-auth/client";
// const isAuthenticatUser = catchAsyncError((req, res, next) => {
//   const session = getSession();
//   if (!session) {
//     return next(new ErrorHandler("No user available", 400));
//   }
//   next();
// });
// export { isAuthenticatUser };
