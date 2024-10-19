import React from "react";
import { ThemeProvider } from "@emotion/react";
import PropTypes from "prop-types";

const tema = {
  cores: {
    white: "",
    warning: "",
    focus: "",
    primarias: {
      a: "#5754ED",
      b: "",
      c: "",
    },
    secundarias: {
      a: "#EBEAF9",
      b: "",
      c: "",
    },
    neutras: {
      a: "",
      b: "",
      c: "",
    },
    dark: {
      a: "",
      b: "",
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