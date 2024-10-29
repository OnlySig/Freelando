import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";

const componentes = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  bodyBold: "strong",
  body2: "p",
  body2Bold: "strong",
  legenda: "p"
};

const estilos = {
  h1: `
    margin: 0 0 42px 0;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
  `,
  h2: `
    margin: 0 0 32px 0;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
  `,
  h3: `
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
  `,
  body: `
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  `,
  bodyBold: `
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  `,
  body2: `
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  `,
  body2Bold: `
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  `,
  legenda: `
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  `
};

const Tipografia = ({variante, tag, children}) => {
  const tagDinamica = componentes[tag];
  const StyledTag = styled[tagDinamica] `
    ${estilos[variante]}
  `;
  return (
    <StyledTag>
      { children }
    </StyledTag>
  );
};

Tipografia.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  variante: PropTypes.string, 
};


export default Tipografia;