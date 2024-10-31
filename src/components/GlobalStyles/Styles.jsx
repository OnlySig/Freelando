import { Global } from "@emotion/react";

const estilos = (theme) => {
  return {
    html: {
      fontFamily: theme.fontFamily.montSerrat
    },
    body: {
      margin: 0,
      padding: 0,
      boxSizing: "border-box"
    }
  };
};

export const Estilos = () => {
  return(<Global styles={estilos}/>);
};
