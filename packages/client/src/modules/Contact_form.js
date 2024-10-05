import React from "react";
import {Grid2, Box, TextField} from "@mui/material"
import { ContactFormFields } from "../config/ContactForm";


function ContactForm() {
    const [input, setInput] = React.useState({
        ...ContactFormFields
    })

    function onInputHandle(e) {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
       
    }
    

    return (
        <Box component="form" sx={{marginTop: "1%"}}>
            <Grid2>
                <TextField name="name" value={input.name} label="Nombre(s)" onChange={(e)=>onInputHandle(e)}/>
            </Grid2>
        </Box>
    )
}


export default ContactForm