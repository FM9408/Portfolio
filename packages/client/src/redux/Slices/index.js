import { combineReducers } from "@reduxjs/toolkit"
import userSlice from "./User/index.js"



const mainIndexReducer = combineReducers({
    userSlice
})

export default mainIndexReducer

