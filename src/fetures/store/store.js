import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "../slices/user/userSlice";

const store = configureStore({
  reducer: {
    auth: registerSlice,
  },
});

export default store;
