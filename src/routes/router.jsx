import { createBrowserRouter } from "react-router-dom";
import DadosPessoais from "../pages/cadastro/DadosPessoais";
import SelecaoCliente from "../pages/cadastro/SelecaoCliente";
import LayoutCadastro from "../components/LayoutCadastro";
import LayoutBase from "../pages/LayoutBase";
import Interesses from "../pages/cadastro/Interesses";
import Concluido from "../pages/cadastro/Concluido";
import HomePage from "../pages/home";
import Error404 from "../pages/errors/Error404";
import Login from "../pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    ErrorBoundary: Error404,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "cadastro",
        element: <LayoutCadastro />,
        children: [
          {
            path: "",
            element: <SelecaoCliente />
          },
          {
            path: "interesses",
            element: <Interesses />,
          },
          {
            path: "dados-pessoais",
            element: <DadosPessoais />
          },
          {
            path: "concluido",
            element: <Concluido />
          }
        ]
      }
    ]
  }
]);