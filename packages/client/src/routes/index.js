import React from "react"
import UserRouter from "./User/index"
import AdminRouter from "./Admin"
import { Box } from "@mui/material"
import { userContext } from "../App"
import { parsePath, Route, Routes } from "react-router-dom"


function MainRouter() {
    const user = React.useContext(userContext)
    return (
        <Routes>
           <Route path="/admin/*" element={<AdminRouter />}/> 
           <Route path={`${window.location.href.toLowerCase().includes("/admin") === false ? "/*" : "none"}`} element={<UserRouter />} />
        </Routes>
           
    )
} 

export default MainRouter