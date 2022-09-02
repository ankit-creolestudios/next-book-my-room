import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  loading: false,
  success: false,
  error: false,
  message: "",
  user: {},
};

const BASE_URL = "http://localhost:3000";
// "https://book-my-room-git-main-ankitkumar-creolestudio.vercel.app";
export const registerUser = createAsyncThunk("user/register", async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/auth/register`, data);
    // console.log(res);
    return res.data;
  } catch (error) {
    return error;
  }
});
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
      // console.log(res);
      return res.data;
    } catch (error) {
      return error;
    }
  }
);
export const currentUser = createAsyncThunk("user/profile", async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/user-profile`);
    return res.data;
  } catch (error) {
    return error;
  }
});
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
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.message = payload.message;
    },
    [registerUser.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [currentUser.pending]: (state) => {
      state.loading = true;
    },
    [currentUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.user = payload;
    },
    [currentUser.rejected]: (state) => {
      state.loading = false;
      state.error = true;
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
