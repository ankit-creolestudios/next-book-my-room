import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  loading: false,
  success: false,
  error: false,
  message: "",
};

const BASE_URL = "http://localhost:3000";
// ||"https://book-my-room-git-main-ankitkumar-creolestudio.vercel.app";
export const resetPassword = createAsyncThunk(
  "user/reset-password",
  async (data) => {
    try {
      const res = await axios.put(
        `${BASE_URL}/api/password/reset/${data.token}`,
        data.passwords
      );
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "user/forgot-password",
  async (email) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/password/forgot`, email);
      console.log(res);
      return res.data;
    } catch (error) {
      return error;
    }
  }
);
const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
    [resetPassword.pending]: (state) => {
      state.loading = true;
    },
    [resetPassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.message = payload.message;
    },
    [resetPassword.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [forgotPassword.pending]: (state) => {
      state.loading = true;
    },
    [forgotPassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.message = payload.message;
    },
    [forgotPassword.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});
export default userSlice.reducer;
