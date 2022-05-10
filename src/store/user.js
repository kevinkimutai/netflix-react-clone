import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  user: { id: null, email: null },
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    login(state, action) {
      state.user.id = action.payload.userSignIn.uid;
      state.user.email = action.payload.userSignIn.email;
    },
    logout(state, action) {
      state.user = INITIAL_STATE;
    },
  },
});

export const userActions = userSlice.actions;
const userReducer = userSlice.reducer;

export default userReducer;
