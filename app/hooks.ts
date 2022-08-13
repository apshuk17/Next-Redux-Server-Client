import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, AppState } from "../store/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector