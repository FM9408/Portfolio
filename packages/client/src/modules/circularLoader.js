import React from "react";
import Loader from "../components/loader";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/Slices/User";


export default function CircularLoader(){
    const [progress, setProgress] = React.useState(0)
    const loading = useSelector(state => state.mainIndexReducer.userSlice.loading)
    const dispatch = useDispatch()

    React.useEffect(()=>{
        if(loading < 100){
            setTimeout(() => {
                dispatch(increment())
                
            }, 1000)
            setProgress(loading)
        }
        if(loading>= 100) {
            setProgress(100)
        }
        
    }, [loading])


    return (
        <Container>
            <Loader value={progress} />
        </Container>
        
    )
}