import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import React from "react";
import CompThemeProvider from "./components/ThemeProvider";
import { Estilos } from "./components/GlobalStyles/Styles";

function App() {
  return (
    <CompThemeProvider>
      <Estilos/>
      <RouterProvider router={router}/>
    </CompThemeProvider>
  );
}

export default App;
