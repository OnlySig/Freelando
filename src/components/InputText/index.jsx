import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledLabel = styled.label `
  display: flex;
  flex-direction: column;
  gap: ${props=>props.theme.espacamentos.xs};
  input {
    border: 1px solid ${props=>props.theme.cores.neutras.a};
    border-radius: ${props=>props.theme.espacamentos.s};
    padding: 12px ${props=>props.theme.espacamentos.s};
    background-color: ${props=>props.theme.cores.white};
    margin-bottom: ${props=>props.theme.espacamentos.xs};
    outline: none;
    font-size: 14px;
    color: ${props=>props.theme.cores.neutras.a};
    line-height: 17px;
  }
  span {
    font-size: 20px;
    color: ${props=>props.theme.cores.neutras.a};
  }
`;

const InputText = ({ require, textLabel }) => {
  return (
    <StyledLabel>
      <span>{textLabel}</span>
      <input type="text" required={require}/>
    </StyledLabel>
  );
};

InputText.propTypes = {
  require: PropTypes.bool,
  textLabel: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};

export default InputText;