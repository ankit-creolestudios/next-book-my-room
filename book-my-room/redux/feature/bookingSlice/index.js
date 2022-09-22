import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import absoluteUrl from "next-absolute-url";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  bookings: [],
  booking: {},
  loading: false,
  dates: [],
  success: false,
  error: false,
  roomAvailbility: {},
};

const BASE_URL = "http://localhost:3000";
// "https://book-my-room-git-main-ankitkumar-creolestudio.vercel.app";

export const newBooking = createAsyncThunk(
  "booking/newBooking",
  async (data) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/booking`, data);
      return res.data;
    } catch (error) {
      return res.data;
    }
  }
);
export const myBooking = createAsyncThunk("booking/info", async (data) => {
  try {
    const { origin } = absoluteUrl(data.req);
    const config = {
      headers: {
        cookie: data.authCookie,
      },
    };
    const res = await axios.get(`${BASE_URL}/api/booking/my-booking`, config);
    return res.data;
  } catch (error) {
    return error;
  }
});
export const getBookingDetail = createAsyncThunk(
  "booking/info",
  async (data) => {
    try {
      const res = await axios.get(`${BASE_URL}/api/booking/${data.id}`);
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

export const checkBookingDates = createAsyncThunk(
  "booking/checkDates",
  async (data) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/api/booking/booking-dates/${data.id}`
      );
      return res.data;
    } catch (error) {
      return error;
    }
  }
);
export const checkingRoomAvailbility = createAsyncThunk(
  "booking/roomAvailbility",
  async (data) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/api/check-room-availbility?roomId=${data.id}&checkInDate=${data.checkInDate}&checkOutDate=${data.checkOutDate}`
      );
      return res.data;
    } catch (error) {
      return error;
    }
  }
);
export const getAdminBooking = createAsyncThunk("booking/booking", async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/admin/booking`);
    return res.data;
  } catch (error) {
    return error;
  }
});
export const removeBooking = createAsyncThunk(
  "booking/removeBooking",
  async (data) => {
    try {
      const res = await axios.delete(`${BASE_URL}/api/booking/${data.id}`);
      return res.data;
    } catch (error) {
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
      console.log(payload, "pay");
      return {
        ...state,
        ...payload.bookings,
      };
    },
    [newBooking.pending]: (state) => {
      state.loading = true;
    },
    [newBooking.fulfilled]: (state, payload) => {
      state.loading = false;
      state.success = true;
    },
    [newBooking.rejected]: (state) => {
      state.loading = false;
      state.error = true;
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
    [checkBookingDates.pending]: (state) => {
      state.loading = true;
    },
    [checkBookingDates.fulfilled]: (state, payload) => {
      state.loading = false;
      state.dates = payload.payload;
    },

    [checkBookingDates.rejected]: (state, payload) => {
      state.loading = false;
      state.error = true;
    },
    [checkingRoomAvailbility.pending]: (state) => {
      state.loading = true;
    },
    [checkingRoomAvailbility.fulfilled]: (state, payload) => {
      state.loading = false;
      state.roomAvailbility = payload;
    },
    [checkingRoomAvailbility.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [getAdminBooking.pending]: (state) => {
      state.loading = true;
    },
    [getAdminBooking.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.bookings = payload;
    },
    [getAdminBooking.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [removeBooking.pending]: (state) => {
      state.loading = true;
    },
    [removeBooking.fulfilled]: (state, payload) => {
      state.loading = false;
      state.success = true;
    },
    [removeBooking.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});
export default bookingSlice.reducer;
