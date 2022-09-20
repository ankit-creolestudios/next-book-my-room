import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import bookingSlice from "./feature/bookingSlice";
import roomSlice from "./feature/roomSlice";
import userSlice from "./feature/userSlice";
const makeStore = () =>
  configureStore({
    reducer: {
      rooms: roomSlice,
      usersPv: userSlice,
      bookings: bookingSlice,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
