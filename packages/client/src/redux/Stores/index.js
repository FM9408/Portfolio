import { configureStore } from "@reduxjs/toolkit"
import mainIndexReducer from "../Slices"


export const store = configureStore({
    reducer: {
        mainIndexReducer
    }
})

