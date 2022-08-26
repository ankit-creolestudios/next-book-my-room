import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  room: {},
  rooms: [],
  loading: false,
  success: false,
  error: false,
};

const BASE_URL = "http://localhost:3000";
export const readRooms = createAsyncThunk("rooms/read", async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/rooms`);
    return res.data;
  } catch (error) {
    return error;
  }
});
export const readRoomsById = createAsyncThunk(
  "roomsbyid/read",
  async (data) => {
    try {
      const res = await axios.get(`${BASE_URL}/api/rooms/${data.id}`);
      return res.data;
    } catch (error) {
      return error;
    }
  }
);
const roomSlice = createSlice({
  name: "myroom",
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, { payload }) => {
      return {
        ...state,
        ...payload.rooms,
      };
    },
    [readRooms.pending]: (state) => {
      state.loading = true;
    },
    [readRooms.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.rooms = payload.rooms;
    },
    [readRooms.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [readRoomsById.pending]: (state) => {
      state.loading = true;
    },
    [readRoomsById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.room = payload.room;
    },
    [readRoomsById.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});
export default roomSlice.reducer;
