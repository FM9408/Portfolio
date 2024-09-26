import React from "react";
import {Button} from "@mui/material"


const SubmitButton = ({onClick}) => {
   
    return (
        <Button onClick={onClick} variant="contained" color="primary">
            Enviar
        </Button>
    )

}



export default SubmitButton