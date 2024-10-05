import React from "react"
import {Container, Box, Paper} from "@mui/material"
import { useSelector } from "react-redux"
import CircularLoader from "../../modules/circularLoader"



export function Homepage() {
    const loading = useSelector(state => state.mainIndexReducer.userSlice.loading)
    return (
        <Container>
            {
                loading >= 100 ? <p>Cargado</p> : <CircularLoader />
            }
        </Container>
    )
}