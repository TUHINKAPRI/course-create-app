import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  user:  (typeof window !== 'undefined') &&  localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  isLogin: (typeof window !== 'undefined') &&  localStorage.getItem("token") ? true : false,
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    log_out: (state) => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      state.user = null;
      state.isLogin = false;
      toast.success('Logout Successfully')
    },
    sign_in: (state, { payload }) => {
      state.isLogin = true;
      state.user=payload?.data?.user
    },
  },
});

export default userSlice.reducer;
export const { log_out, sign_in } = userSlice.actions;
