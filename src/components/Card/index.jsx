import PropTypes from "prop-types";
import styled from "@emotion/styled";
import React from "react";

const StyledDiv = styled.form `
  padding: ${props => props.theme.espacamentos.l};
  background-color: ${props => props.theme.cores.secundarias.a};
  border: 1px solid ${props => props.theme.cores.primarias.a};
  border-radius: ${props => props.theme.espacamentos.s};
  margin: 80px 0;
`;

const Card = ({ children }) => {
  return(
    <StyledDiv>
      { children }
    </StyledDiv>
  );

};

Card.propTypes = {
  children: PropTypes.node.isRequired,  // children pode ser qualquer nó do React
};
export default Card;