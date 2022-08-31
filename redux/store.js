import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import roomSlice from "./feature/roomSlice";
import userSlice from "./feature/userSlice";
const makeStore = () =>
  configureStore({
    reducer: {
      rooms: roomSlice,
      usersPv: userSlice,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
