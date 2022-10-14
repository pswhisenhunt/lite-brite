import { configureStore } from "@reduxjs/toolkit"

/** lite brite reducers */
import colorsReducer from "../features/liteBrite/colors/colorsSlice"
import boardSlice from "../features/liteBrite/board/boardSlice"

export const store = configureStore({
    reducer: {
        colors: colorsReducer,
        board: boardSlice
    }
})