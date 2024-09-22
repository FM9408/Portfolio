import React from "react"
import { Home, CallEnd} from "@mui/icons-material"







export function  Appbarbuttons (iconrotation, key) {
    const buttons = [
    
        {
            title: "Home",
            icon: <Home />,
            href: "/"
        },
        {
            title: "Contacto",
            icon: <CallEnd sx={{rotate: iconrotation === true && key === "Contacto" ? "-130deg" : "0deg", transition: "rotate .5s ease-in-out" }}/>,
            href: "/Contacto"
        }
    ]
    return buttons

} 
 
