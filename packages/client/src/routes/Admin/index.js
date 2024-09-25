import React from "react"
import { userContext } from "../../App"
import AdminNavbar from "../../modules/AdminNavbar"
import { Typography, Box, Paper, Container } from "@mui/material"
import { useNavigate  } from "react-router-dom"

function AdminRouter(){
    const user = React.useContext(userContext)
    const [redirectTime, setredirectTime] = React.useState(24)
    const [opacity, setOpacity] = React.useState("0%")
   
 
    React.useEffect(() => {
       if (opacity === "0%") setOpacity("100%")
       setTimeout(() => {
        if(redirectTime > 0 && redirectTime<=8 ) {
            setredirectTime(redirectTime-1)
        } else if (redirectTime === 0) {
            window.location.href = "/homepage"
        } else {
            setredirectTime(redirectTime-8)
        }
       }, redirectTime > 8 ? 8000 : 1000);
    
        
        
    },[redirectTime, opacity])

    return (
        <Box>
            {
                user.isAdmin === true ? (
                    <Box>
                        <AdminNavbar />
                        
                    </Box>
                ) : (
                   <Container sx={{display: "flex", alignItems: "center", height: "700px", justifyContent: "center"}}>
                    <Box sx={{opacity: `${opacity}`, display: "flex", width: "fit-content", height: "100%",transition: "opacity 1s ease-in", backgroundColor: "red", padding: "1%", justifyContent:"center"}}>
                    <Paper  sx={{  position: "relative", width:"100%"  }}>
                        <video  style={{
                            height: "100%",
                           
                        }} src="/assets/Videos/Unauth-access.mp4" loop={true} autoPlay={true} controls={false} />
                        {
                            redirectTime <= 8 ? <Typography sx={{display: "flex", justifyContent: "center", position: "absolute", zIndex: 1, color:"red", top: "10%", fontSize: "30px"}}>
                                `Te llevaremos a la pagina principal en {redirectTime} segundos`
                            </Typography> : <></>
                        }
                    </Paper>
                   </Box>
                   </Container>
                )
            }
        </Box>
    )
}



export default AdminRouter