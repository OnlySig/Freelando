import { css, Global } from "@emotion/react";
import React from "react";

const estilos = css`
  * {
    font-family: "Montserrat", sans-serif;
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
`;

export const Estilos = () => {
  return(<Global styles={estilos}/>);
};