import React from "react";
import MainRouter from "./routes";
import ThemeProvider from "./theme";
import {useSelector, useDispatch} from "react-redux"
import { getUserInfo } from "./redux/Slices/User";
import "./App.css"

export const userContext= React.createContext({

})

function App() {
  const [loggedUser, setUser] = React.useState({

  })
  const dispatch = useDispatch()

const state = useSelector((state) => state.mainIndexReducer.userSlice) 
  dispatch(getUserInfo("OfRSPPJk@yahoo.com"))
React.useEffect(() => {
  if(loggedUser !== state) {
    setUser(state)
  } 
  
  console.log(state)
}, [loggedUser])


  return (
    <userContext.Provider value={loggedUser}>
      <ThemeProvider>
      <MainRouter />
    </ThemeProvider>
    </userContext.Provider>
  );
}

export default App;
