import React from "react";
import MainRouter from "./routes";
import ThemeProvider from "./theme";



function App() {

  return (
    <ThemeProvider>
      <MainRouter />
    </ThemeProvider>
  );
}

export default App;
