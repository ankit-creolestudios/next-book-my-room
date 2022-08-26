import Room from "../models/room";
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();

    res.status(200).json({
      sucess: true,
      roomTotal: rooms.length,
      rooms,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

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
export { getAllRooms, newRoom, getSingleRoom, updateRoom, removeRoom };
