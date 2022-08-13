import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import subjectReducer, { subjectSlice } from "./subject";
import userReducer, { userSlice } from "./user";

const combinedReducers = combineReducers({
  [subjectSlice.name]: subjectReducer,
  [userSlice.name]: userReducer,
});

const masterReducer: any = (state: AppState, action: PayloadAction<any>) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      subject: { ...state.subject, ...action.payload.subject },
      user: { users: [...state.user.users, ...action.payload.user.users] },
    };
  } else {
    return combinedReducers(state, action);
  }
};

const makeStore = () =>
  configureStore({
    reducer: masterReducer,
    devTools: true,
  });

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<AppStore>(makeStore);
