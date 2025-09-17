import {combineReducers} from "@reduxjs/toolkit";
import {reducer as loading} from "./slices/loadingSlice"

export const rootReducer = combineReducers({
    loading,
})


export type RootState = ReturnType<typeof rootReducer>;