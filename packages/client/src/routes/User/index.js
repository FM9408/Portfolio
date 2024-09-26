import { Routes, Route } from "react-router-dom"
import { Homepage } from "../../pages/User/homepaje"
import UserAppbar from "../../modules/Appbar"
import { Box, Paper } from "@mui/material"


function UserRouter() {
    return (
        <Box>
            <UserAppbar />
            <Routes>
                <Route path='' element={<Homepage />} />
            </Routes>
        </Box>
    )
}


export default UserRouter