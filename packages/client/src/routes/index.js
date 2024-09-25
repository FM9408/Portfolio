import React from "react"
import UserRouter from "./User/index"
import AdminRouter from "./Admin"
import { Box } from "@mui/material"
import { userContext } from "../App"
import { parsePath, Route, Routes } from "react-router-dom"


function MainRouter() {
    const user = React.useContext(userContext)
    return (
        <Box>
            {
                !window.location.href.toLowerCase().split("/").includes("admin") ? <UserRouter/> :
                <AdminRouter />
            }
            
        </Box>
           
    )
} 

export default MainRouter