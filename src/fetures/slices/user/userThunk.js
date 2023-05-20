import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateAxios } from "../../../api/privateAxios";

//register user
export const registerUser = createAsyncThunk(
  "user/register",
  async (user, { rejectWithValue, getState, dispatch }) => {
    try {
      const response = await privateAxios.post("/user/regitser", user);
      return response.data;
    } catch (error) {
      console.error(error?.response);
      rejectWithValue(error?.response?.data?.error);
    }
  }
);
