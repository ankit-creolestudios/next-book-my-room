import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import absoluteUrl from "next-absolute-url";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  bookings: [],
  booking: {},
  loading: false,
  success: false,
  error: false,
};

const BASE_URL =
  // "http://localhost:3000";
  "https://book-my-room-git-main-ankitkumar-creolestudio.vercel.app";
export const myBooking = createAsyncThunk("booking/info", async (data) => {
  try {
    const { origin } = absoluteUrl(data.req);
    const config = {
      headers: {
        cookie: data.authCookie,
      },
    };
    const res = await axios.get(`${BASE_URL}/api/booking/my-booking`, config);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});
export const getBookingDetail = createAsyncThunk(
  "booking/info",
  async (data) => {
    console.log(data);
    try {
      const res = await axios.get(`${BASE_URL}/api/booking/${data.id}`);
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, { payload }) => {
      return {
        ...state,
        ...payload.rooms,
      };
    },
    [myBooking.pending]: (state) => {
      state.loading = true;
    },
    [myBooking.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.bookings = payload;
    },
    [myBooking.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [getBookingDetail.pending]: (state) => {
      state.loading = true;
    },
    [getBookingDetail.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.booking = payload;
    },
    [getBookingDetail.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});
export default bookingSlice.reducer;
