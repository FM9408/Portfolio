import { Button } from "@mui/material"


function IconedButton({ icon, title, href }) {
    return (
        <Button title={`${title}`} href={href} startIcon={icon} color="secondary" variant="contained">
            {title}
        </Button>
    )
}


export default IconedButton