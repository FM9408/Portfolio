import React from "react"
import { userContext } from "../../App"
import AdminNavbar from "../../modules/AdminNavbar"
import { Typography, Box, Paper, Container } from "@mui/material"

function AdminRouter(){
    const user = React.useContext(userContext)
    return (
        <Box>
            {
                user.isAdmin === true ? (
                    <Box>
                        <AdminNavbar />
                        
                    </Box>
                ) : (
                   <Box>
                    <Paper>
                        <Container>
                            <Typography>
                                Acceso no autorizado
                            </Typography>
                        </Container>
                    </Paper>
                   </Box>
                )
            }
        </Box>
    )
}



export default AdminRouter