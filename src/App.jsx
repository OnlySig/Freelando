import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import CompThemeProvider from "./components/ThemeProvider";
import { Estilos } from "./components/GlobalStyles/Styles";
import { SessaoUsuarioProvider } from "./context/SessaoUsuario";

function App() {
  return (
    <CompThemeProvider>
      <Estilos />
      <SessaoUsuarioProvider>
        <RouterProvider router={router} />
      </SessaoUsuarioProvider>
    </CompThemeProvider>
  );
}

export default App;
