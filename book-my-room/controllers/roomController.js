import catchAsyncError from "../middlewares/catchAsyncError";
import Booking from "../models/booking";
import Room from "../models/room";
const getAllRooms = catchAsyncError(async (req, res) => {
  const rooms = await Room.find();

  res.status(200).json({
    sucess: true,
    roomTotal: rooms.length,
    rooms,
  });
});

// new room creat /api/rooms
const newRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// get room by id           /api/rooms/:id
const getSingleRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);
    if (!room) {
      return res
        .status(404)
        .json({ success: false, error: "Room not find by this id" });
    }
    res.status(200).json({
      sucess: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
const updateRoom = async (req, res) => {
  try {
    let room = await Room.findById(req.query.id);
    if (!room) {
      return res
        .status(404)
        .json({ success: false, error: "Room not find by this id" });
    }
    room = await Room.findOneAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      sucess: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
const removeRoom = async (req, res) => {
  try {
    let room = await Room.findById(req.query.id);
    if (!room) {
      return res
        .status(404)
        .json({ success: false, error: "Room not find by this id" });
    }
    room.remove();
    res.status(200).json({
      sucess: true,
      message: "room remove",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//new review ------------ /api/review
const newReview = catchAsyncError(async (req, res) => {
  const { roomId, rating, comment } = req.body;
  const review = {
    user: "630319f6acb599f6537f230d",
    name: "ankit kumar",
    rating: Number(rating),
    comment,
  };
  const room = await Room.findById(roomId);
  const isReviewed = await room.reviews.find(
    (review) => review.user.toString() === req.user._id.toString()
  );
  if (isReviewed) {
    room.reviews.forEach((review) => {
      if (review.user.toString() === req.user._id.toString()) {
        review.comment = comment;
        review.rating = rating;
      }
    });
  } else {
    room.reviews.push(review);
    room.numOfReviews = room.reviews.length;
  }
  room.ratings =
    room.reviews.reduce((acc, item) => item.rating + acc, 0) /
    room.reviews.length;
  await room.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});
const getAllAdminRoom = catchAsyncError(async (req, res) => {
  const rooms = await Room.find();
  res.status(200).json({
    success: true,
    rooms,
  });
});
// room reviews ----------------------- /api/reviews
const getRoomReviews = catchAsyncError(async (req, res) => {
  const room = await Room.findById(req.query.id);
  res.status(200).json({
    success: true,
    reviews: room.reviews,
  });
});
//review availability check
const checkReviewAvailability = catchAsyncError(async (req, res) => {
  const { roomId } = req.query;
  const booking = await Booking.findOne({ user: req.user._id, room: roomId });
  let isReviewAvailable = false;
  if (booking.length > 0) {
    isReviewAvailable = true;
  }
  res.status(200).json({
    success: true,
    isReviewAvailable,
  });
});
// remove reviews --------------------- /api/reviews
const removeReviews = catchAsyncError(async (req, res) => {
  const room = await Room.findById(req.query.userId);
  const reviews = room.reviews.filter((review) => {
    review._id.toString() === req.query.userId.toString();
  });
  const numOfReviews = reviews.length;
  const ratings =
    room.reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;
  await room.findOneAndUpdate(
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
});
export {
  getAllRooms,
  newRoom,
  getSingleRoom,
  updateRoom,
  removeRoom,
  newReview,
  getAllAdminRoom,
  checkReviewAvailability,
  getRoomReviews,
  removeReviews,
};
