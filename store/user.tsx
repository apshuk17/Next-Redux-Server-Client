import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { UserDetail } from "../types";
import { AppState, AppThunk } from "./store";

interface UserState {
  users: UserDetail[] | [];
}

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
  },
//   extraReducers: {
//     [HYDRATE]: (state, action) => {
//       const { user } = action.payload;
//       console.log("##HYDRATE ACTION USER", user);
//       return {
//         ...state,
//         ...user
//       };
//     },
//   },
});

export const fetchUsers = (): AppThunk => async (dispatch) => {
  const url = "http://localhost:3000/api/users";
  const response = await fetch(url);
  const users = await response.json();

  dispatch(setUsers(users));
};

export const { setUsers } = userSlice.actions;

export const selectUsers = (state: AppState) => state.user.users;

export default userSlice.reducer;
