import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./userThunk";

let initialState = {
  loading: false,
  error: false,
  errorMessage: {},
  userInfo: {},
};

let registerSlice = createSlice({
  name: "user Login",
  initialState,
  reducers: {
    resetForm: () => initialState,
    userError: (state, action) => {
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.errorMessage = {};
      state.userInfo = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.error;
    });
  },
});

export let { resetForm, userError } = registerSlice.actions;

export default registerSlice.reducer;
