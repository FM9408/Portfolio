import React from "react"
import { AppBar, useTheme, Container, Box } from "@mui/material"
import IconedButton from "../components/IconedButton"
import { Appbarbuttons } from "../helpers/Appbarbuttons"
import SearchField from "../components/searchbox"
import { useSelector } from "react-redux"


function UserAppbar() {
    const theme = useTheme()
    const [buttonHover, setHover] = React.useState(false)
    const [buttonKey, setButtonKey] = React.useState("")
    
    return (
        <Box sx={{ display: "flex"}}>
            <AppBar position='static' component="nav" sx={{ display: {xs: "flex", sm: "block"} }}>
                <Box   sx={{ display: { xs: "block", sm: "inline-flex", width: { xs: "100%", sm: `${100 / 4}%` } } }}>
                    {
                        Appbarbuttons(buttonHover, buttonKey).map((button) => {
                        return (
                           
                                <IconedButton
                                    title={button.title}
                                    icon={button.icon}
                                    href={button.href}
                                    key={button.title}
                                    setHover={setHover}
                                    setButtonKey={setButtonKey}
                                />
                        )
                        })
                    }    
                </Box>
                <Box sx={{display: {xs: "none", sm: "inline-block"}, width: {sm: `${100/2}%`}}}>

                </Box>
                <Box sx={{ display: { xs: "block", sm: "inline-flex", width: { xs: "100%", sm: `${100 / 4}%` } } }}>
                    <SearchField />
                </Box>
            </AppBar>
        </Box>
    )
}


export default UserAppbar