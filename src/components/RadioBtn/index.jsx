import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";

const StyledRadio = styled.div `
  input {
    opacity: 0;
  }
`;
const StyledLabel = styled.label `
  display: flex;
  align-items: center;
  gap: 16px;
  span {
    cursor: pointer;
  }
  &:hover {
    &:before {
      border-color: ${props=> props.theme.cores.primarias.a};
    }
    span {
      color: ${props=>props.theme.cores.primarias.a}
    }
  }
  &:before {
    content: '';
    width: 24px;
    height: 24px;
    background-color: ${props=> props.checked ? props.theme.cores.primarias.b : props.theme.cores.neutras.c};
    border: 1px solid ${props=> props.checked ? props.theme.cores.dark.b : props.theme.cores.neutras.a};
    border-radius: 50%;
    cursor: pointer;
  }
`;
const RadioBtn = ({ valor, radioText, checked, onClick }) => {
  return (
    <StyledRadio>
      <input type="radio" id={`radio_custom_${valor}`} checked={checked} onChange={onClick}/>
      <StyledLabel htmlFor={`radio_custom_${valor}`} checked={checked} >{<span>{radioText}</span>}</StyledLabel>
    </StyledRadio>
  );
};

RadioBtn.propTypes = {
  valor: PropTypes.number,
  radioText: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func
};


export default RadioBtn;