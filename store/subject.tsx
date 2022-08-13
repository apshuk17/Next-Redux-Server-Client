import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppThunk } from "./store";

export const subjectSlice = createSlice({
  name: "subject",
  initialState: {} as any,
  reducers: {
    setEnt(state, action) {
      return action.payload;
    },
  },
//   extraReducers: {
//     [HYDRATE]: (state, action) => {
//       const { subject } = action.payload;
//       return {
//         ...state,
//         ...subject,
//       };
//     },
//   },
});

export const { setEnt } = subjectSlice.actions;

export const fetchSubject =
  (id: any): AppThunk =>
  async (dispatch) => {
    const timeoutPromise = (timeout: number) =>
      new Promise((resolve) => setTimeout(resolve, timeout));
    await timeoutPromise(300);

    dispatch(
      setEnt({
        [id]: {
          id,
          name: `Subject ${id}`,
        },
      })
    );
  };

export default subjectSlice.reducer;
