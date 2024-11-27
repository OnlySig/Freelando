import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import CompThemeProvider from "./components/ThemeProvider";
import { Estilos } from "./components/GlobalStyles/Styles";
import { SessaoUsuarioProvider } from "./context/SessaoUsuario";
import { ReactQueryProvider } from "./ReactQueryProvider";

function App() {
  return (
    <CompThemeProvider>
      <Estilos />
      <ReactQueryProvider>
        <SessaoUsuarioProvider>
          <RouterProvider router={router} />
        </SessaoUsuarioProvider>
      </ReactQueryProvider>
    </CompThemeProvider>
  );
}

export default App;
