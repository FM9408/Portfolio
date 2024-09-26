import { Routes, Route } from "react-router-dom"
import { Homepage } from "../../pages/User/homepaje"
import ContactPage from "../../pages/User/Contact"
import UserAppbar from "../../modules/Appbar"
import { Box, Container, Paper } from "@mui/material"


function UserRouter() {
    return (
        <Box>
            <Box>
                <UserAppbar />
            </Box>
            <Box>
                <Paper sx={{backgroundColor:"beige"}}>
                <Routes>
                    <Route path='' element={<Homepage />} />
                    <Route path="/Contacto" element={<ContactPage/>}/>
                </Routes>
                </Paper>
            </Box>
        </Box>
    )
}


export default UserRouter