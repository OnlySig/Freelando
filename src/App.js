import React from "react";
import { Estilos } from "./components/GlobalStyles/Styles";
import Card from "./components/Card";
import CompThemeProvider from "./components/ThemeProvider";

function App() {
  return (
    <CompThemeProvider>
      <Estilos/>
      <Card>
        <h1>oi react :)</h1>
      </Card>
    </CompThemeProvider>
  );
}

export default App;
