import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { localStore } from "../../.."
import axios from "axios"

export const getUserInfo = createAsyncThunk(
    "users/getUserByEmail",
    async(email) => {
        const response = await axios.post("/user/view/user",{
            email}
        )
        return response.data
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: 0,
        displayName: '',
        email: '',
        photoURL: '',
        isAdmin: false,
    },
    reducers: {
        increment: (state) => {
            state.loading += 100/Math.floor(Math.random()*(5))
        }
    },
    extraReducers: (builder) => {
        
        builder.addCase(getUserInfo.fulfilled, (state, action) => {
            let {email, displayName, ProfilePic, isAdmin} = action.payload
            state.loading = 100
            Object.assign(state, {
                email,
                displayName,
                photoURL: ProfilePic.photoURL,
                isAdmin
            })
            
            
        })
    }
    

    
})


export const {increment} = userSlice.actions



export default userSlice.reducer