/** @format */

import absoluteUrl from "next-absolute-url";
import cloudinary from "cloudinary";
import crypto from "crypto";
import User from "../models/user";
import { ErrorHandler } from "../utils/errorHandler";
import sendEmail from "../utils/sendEmail";
import catchAsyncError from "../middlewares/catchAsyncError";
import { getSession } from "next-auth/react";

const registerUser = catchAsyncError(async (req, res) => {
  const { name, email, password, phone } = req.body;
  // console.log(req.body);
  const newUser = User.create({
    name,
    email,
    password,
    phone,
    avatar: {
      public_id: "PUBLIC_ID",
      url: "URL",
    },
  });
  res.status(200).json({
    sucess: true,
    message: "User register success",
  });
});

//profile curent user ------------ /api/me
const currentUserProfile = catchAsyncError(async (req, res) => {
  const session = await getSession({ req });
  // const user = User.findById(req.user._id);
  const user = await User.findById(session?.token?.sub);
  res.status(200).json({
    success: true,
    user: user,
  });
});
const getMyProfile = catchAsyncError(async (req, res) => {
  const user = User.findById(req.query.id);
  res.status(200).json({
    success: true,
    user: user,
  });
});
//get user ------------------------ /api/admin/users
const getAdminUsers = catchAsyncError(async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    numOfUsers: users.length,
    users,
  });
});
//get user by id ------------------------------ /api/admin/users/:id
const getUserById = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.query.id);
  if (!user) {
    return next(new ErrorHandler("User not find by this id", 400));
  }
  res.status(200).json({ success: true, user });
});
//update user ------------------------------- /api/admin/users/:id
const updateUser = catchAsyncError(async (req, res, err) => {
  // console.log(req.body, req.query, "user");
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
  };
  const user = await User.findByIdAndUpdate(req.query.id, newUser, {
    new: false,
    runValidators: true,
    useFindAndModify: false,
  });

  // console.log(err, "res");
  res.status(200).json({
    success: true,
  });
});
//remove user ------------------------------ /api/admin/users/:id
const removeUser = catchAsyncError(async (req, res, next) => {
  // console.log(req.query);
  const user = await User.findById(req.query.id);
  if (!user) {
    return next(new ErrorHandler("User not find by this id", 400));
  }
  // console.log(user);
  const imageId = user.avatar.public_id;
  // await cloudinary.v2.uploader.destroy(imageId);
  await user.remove();
  res.status(200).json({
    success: true,
    message: "User removed success",
    user,
  });
});
//password --------------------------------- /api/admin/password/forgot
const forgotPassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new ErrorHandler(`User not found with this email`, 404));
  }
  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });
  // origin
  const { origin } = absoluteUrl(req);
  //reset password link
  const resetLink = `${origin}/password/reset/${resetToken}`;
  const message = `Your password reset url is as follow: \n\n ${resetLink} \n\n\ If you have not requested this email, then ignore it.`;
  try {
    sendEmail({
      email: user.email,
      subject: "Reset Password",
      message,
    });
    res
      .status(200)
      .json({ success: true, message: `Message sent to ${user.email}`, user });
  } catch (error) {
    user.ResetPasswordToken = undefined;
    user.ResetPasswordExpiry = undefined;
    // await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.message, 500));
  }
});
const resetPasssword = catchAsyncError(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.query.token)
    .digest("hex");
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
  if (!user) {
    return next(new ErrorHandler(`Invalid token or token expired`, 404));
  }
  // console.log(req.body, user);
  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler(`wrong password`, 404));
  }
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save({ validateBeforeSave: false });
  res.status(200).json({ success: true, message: "password change success" });
});
export {
  registerUser,
  getMyProfile,
  currentUserProfile,
  getAdminUsers,
  getUserById,
  updateUser,
  removeUser,
  forgotPassword,
  resetPasssword,
};
