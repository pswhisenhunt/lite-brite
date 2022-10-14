import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "./types"


/* 
    Alias the useDispatch and useSelector hooks so that we can add types; we will import these into our
    components instead of the base hooks from react-redux.
*/
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector