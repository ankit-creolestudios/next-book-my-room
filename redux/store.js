import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import roomSlice from "./feature/roomSlice";
const makeStore = () =>
  configureStore({
    reducer: {
      rooms: roomSlice,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
