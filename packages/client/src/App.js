import React from "react";
import MainRouter from "./routes";
import ThemeProvider from "./theme";
import {useSelector} from "react-redux"

export const userContext= React.createContext({

})

function App() {
  const [loggedUser, setUser] = React.useState({

  })

const state = useSelector((state) => state.mainIndexReducer.userSlice) 

React.useEffect(() => {
  if(loggedUser !== state) {
    setUser(state)
  }
  console.log(state)
}, [loggedUser, state])


  return (
    <userContext.Provider value={loggedUser}>
      <ThemeProvider>
      <MainRouter />
    </ThemeProvider>
    </userContext.Provider>
  );
}

export default App;
