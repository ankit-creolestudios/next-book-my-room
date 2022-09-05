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
//my booking detail ------------ /api/booking/my-booking
const myBookingDetail = catchAsyncError(async (req, res) => {
  const bookings = await Booking.find({ user: session?.token?.sub })
    .populate({
      path: "room",
      select: "name pricePerNight image",
    })
    .populate({
      path: "user",
      select: "name email",
    });
  res.status(200).json({
    success: true,
    bookings,
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
//check room availability ------------ /api/booking/check
const checkRoomAvailability = catchAsyncError(async (req, res) => {
  const { roomId, checkInDate, checkOutDate } = req.body;
  checkInDate = new Date(checkInDate);
  checkOutDate = new Date(checkOutDate);
  const booking = await Booking.find({
    room: roomId,
    checkInDate: { checkInDate },
    checkOutDate: { checkOutDate },
  });
  let isAvailable;
  if (booking.length > 0) {
    isAvailable = true;
  } else {
    isAvailable = false;
  }
  res.status(200).json({
    success: true,
    isAvailable,
  });
});
const checkRoomBookDates = catchAsyncError(async (req, res) => {
  const roomId = req.query;
  const bookings = await Booking.find({ room: roomId });
  const timedifference = moment().utcOffset() / 60;
  let bookingDates = [];
  bookings.forEach((booking) => {
    const checkInDate = moment(booking.checkInDate).add(
      timedifference,
      "hours"
    );
    const checkOutDate = moment(booking.checkOutDate).add(
      timedifference,
      "hours"
    );
    const range = moment.range(moment(checkInDate), moment(checkOutDate));
    const dates = Array.from(range.by("day"));
    bookingDates = bookingDates.concat(dates);
  });
  res.status(200).json({ success: true, bookingDates });
});
const getAdminBookings = catchAsyncError(async (req, res) => {
  const booking = await Booking.find({ user: req.user._id }).populate(
    {
      path: "room",
      select: "name pricePerNight image",
    },
    {
      path: "user",
      select: "name email",
    }
  );
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
export {
  checkRoomAvailability,
  newBooking,
  checkRoomBookDates,
  getBookingDetail,
  removeBooking,
  myBookingDetail,
};
