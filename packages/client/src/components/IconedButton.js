import { Button } from "@mui/material"
import React from "react"





function IconedButton({ icon, title, href, setHover, setButtonKey }) {
    
    return (
        <Button 
            size="large"
            title={`${title}`}
            href={href} startIcon={icon}
            color="secondary"
            variant="contained"
            onPointerEnter={() => { 
                setHover(true)
                setButtonKey(title)
            }
        }
            onPointerLeave={()=> {
                setHover(false)
                setButtonKey("")

            } 
        }
        >
            {title}
        </Button>
    )
}


export default IconedButton