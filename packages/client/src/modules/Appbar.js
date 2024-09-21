import { AppBar, useTheme, Container, Box } from "@mui/material"
import IconedButton from "../components/IconedButton"
import { Appbarbuttons } from "../helpers/Appbarbuttons"
import SearchField from "../components/searchbox"


function UserAppbar() {
    const theme = useTheme()
    return (
        <Box sx={{ display: "flex"}}>
            <AppBar position='static' component="nav" sx={{ display: {xs: "flex", sm: "block"} }}>
                <Box sx={{ display: { xs: "block", sm: "inline-flex", width: { xs: "100%", sm: `${100 / 3}%` } } }}>
                    {
                        Appbarbuttons.map((button) => {
                        return (
                           
                                <IconedButton
                                    title={button.title}
                                    icon={button.icon}
                                    href={button.href}
                                    key={button.title}
                                />
                        )
                        })
                    }    
                </Box>
                <Box sx={{ display: { xs: "block", sm: "inline-flex", width: { xs: "100%", sm: `${100 / 3}%` } } }}>
                    <SearchField />
                </Box>
            </AppBar>
        </Box>
    )
}


export default UserAppbar