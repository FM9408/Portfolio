import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        displayName: 'Jaydon Frankie',
        email: 'demo@minimals.cc',
        photoURL: '/assets/images/avatars/avatar_default.jpg',
        isAdmin: false,
    },
    reducers: {
        
    }
})



export default userSlice.reducer