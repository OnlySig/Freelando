import { ThemeProvider } from "@emotion/react";
import PropTypes from "prop-types";

const tema = {
  cores: {
    white: "#FFF",
    warning: "",
    focus: "",
    primarias: {
      a: "#5754ED",
      b: "#D93114",
      c: "#168070",
    },
    secundarias: {
      a: "#EBEAF9",
      b: "",
      c: "#EBFCF9",
    },
    neutras: {
      a: "#373737",
      b: "#E8E8E8",
      c: "#F5F5F5",
    },
    dark: {
      a: "",
      b: "#B61B00",
      c: "",
    },
  },
  espacamentos: {
    xxs: "4px",
    xs: "8px",
    s: "16px",
    m: "24px",
    l: "32px",
    xl: "48px",
    xxl: "64px"
  },
  fontFamily: {
    montSerrat: "'Montserrat', sans-serif",
  }
};

const CompThemeProvider = ({ children }) => {
  return(
    <ThemeProvider theme={tema}>
      { children }
    </ThemeProvider>
  );
};

CompThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,  // children pode ser qualquer nó do React
};

export default CompThemeProvider;