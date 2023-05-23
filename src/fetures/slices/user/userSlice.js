import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./userThunk";

let initialState = {
  loading: false,
  error: false,
  errorMessage: undefined,
  userInfo: {},
  errorValue: undefined,
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
      state.errorMessage = "";
      state.userInfo = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      let { error, payload } = action;
      state.loading = false;

      state.errorMessage = payload.response.data.error;
      state.errorValue = error.message;
      state.error = true;
    });

    //login
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.errorMessage = "";
      state.userInfo = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      let { error, payload } = action;
      state.loading = false;

      state.errorMessage = payload.response.data.error;
      state.errorValue = error.message;
      state.userInfo = undefined;
      state.error = true;
    });
  },
});

export let { resetForm, userError } = registerSlice.actions;

export default registerSlice.reducer;
