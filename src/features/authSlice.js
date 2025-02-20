import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
      state.status = true;
    },
    logout: (state) => {
      state.userData = null;
      state.status = false;
    },
    setUser: (state, action) => {
      state.userData = action.payload;
      state.status = action.payload ? true : false;
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
