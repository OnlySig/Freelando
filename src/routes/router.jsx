import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SelecaoCliente from "../pages/cadastro/SelecaoCliente";
import LayoutCadastro from "../components/LayoutCadastro";
import LayoutBase from "../pages/LayoutBase";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase/>,
    children: [
      {
        path: "cadastro",
        element: <LayoutCadastro />,
        children: [
          {
            path: "",
            element: <SelecaoCliente/>
          },
          {
            path: "cliente",
            element: <h1>Interesesses</h1>,
          },
          {
            path: "dados-pessoais",
            element: <HomePage/>
          },
          {
            path: "concluido",
            element: <h1>Concluido</h1>
          }
        ]
      }
    ]
  }
]);