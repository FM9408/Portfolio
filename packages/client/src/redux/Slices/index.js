import { combineReducers } from "@reduxjs/toolkit"
import userSlice from "./User/index.js"



const mainIndexReducer = combineReducers({
    user: userSlice,
})

export default mainIndexReducer

