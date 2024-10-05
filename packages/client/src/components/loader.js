import {CircularProgress, Box, Typography, colors} from "@mui/material"


import { useTheme } from "@emotion/react"
import React from "react"


const GradientProgretion = (props) => {
   
    return (
        <React.Fragment>
            <svg width={0} height={0}>
                <defs>
                    <linearGradient id="progress-gradient"cx={"50"} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset={"0%"} stopColor={`${colors.amber[500]}`}/>
                        <stop offset={"50%"} stopColor={`${colors.deepOrange[400]}`}/>
                        <stop offset="100%" stopColor={`${colors.amber[500]}`} />
                    </linearGradient>
                </defs>
            </svg>
            <CircularProgress {...props} size={140} variant="indeterminate" disableShrink  sx={{"svg circle" : {stroke: "url(#progress-gradient)"}}} />
        </React.Fragment>
    )
}


function Loader(props) {
    const theme = useTheme()
   
    return(
        <Box sx={{position: "relative", display: "inline-flex", width: "100%", height: "800px", justifyContent: "center", alignItems: "center"}}>
            <GradientProgretion {...props} />
            <Box sx={{top: 0, left: 0, width: "100%", bottom: 0, right: 0, position: "absolute", display: "flex", alignItems: "center", justifyContent: "center"}}>
            
                <Typography variant="caption" component={"div"} sx={{color: "text.secondary"}}>
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    )

}



export default Loader