import Booking from "../models/booking";
import moment from "moment";
import catchAsyncError from "../middlewares/catchAsyncError";
import { ErrorHandler } from "../utils/errorHandler";
//new booking ---------   /api/booking
const newBooking = catchAsyncError(async (req, res) => {
  const {
    room,
    user,
    checkInDate,
    checkOutDate,
    daysOfStay,
    amountPaid,
    paymentInfo,
  } = req.body;

  const booking = await Booking.create({
    room,
    user,
    checkInDate,
    checkOutDate,
    daysOfStay,
    amountPaid,
    paymentInfo,
    paidAt: Date.now(),
  });
  res.status(200).json({
    success: true,
    booking,
  });
});
//booking detail ------------ /api/booking/:id
const getBookingDetail = catchAsyncError(async (req, res) => {
  const bookingDetail = await Booking.findById(req.query.id);
  // .populate({
  //   path: "room",
  //   select: "name pricePerNight image",
  // })
  // .populate({
  //   path: "user",
  //   select: "name email",
  // });
  res.status(200).json({
    success: true,
    bookingDetail,
  });
});
//remove booking   ------------ /api/booking/:id
const removeBooking = catchAsyncError(async (req, res, next) => {
  const bookingDetail = await Booking.findById(req.query.id);
  if (!bookingDetail) {
    return next(ErrorHandler("No Booking", 400));
  }
  await bookingDetail.remove();
  res.status(200).json({
    success: true,
  });
});
export { newBooking, getBookingDetail, removeBooking };
