import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledButtonOne = styled.button `
  background-color: ${props=>props.theme.cores.primarias.b};
  color: ${props=>props.theme.cores.neutras.c};
  padding: 10px 16px;
  border-radius: 16px;
  border: 2px solid ${props=>props.theme.cores.primarias.b};
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  cursor: pointer;
  :hover {
    background-color: ${props=>props.theme.cores.neutras.c};
    color: ${props=>props.theme.cores.primarias.b};
    path {
      fill: ${props=>props.theme.cores.primarias.b};
    }
  }
`;

const StyledButtonTwo = styled.button `
  background-color: transparent;
  color: ${props=>props.theme.cores.primarias.b};
  padding: 10px 16px;
  border-radius: 16px;
  border: 2px solid ${props=>props.theme.cores.primarias.b};
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  cursor: pointer;
  path {
    fill: ${props=>props.theme.cores.primarias.b};
  }
  :hover {
    background-color: ${props=>props.theme.cores.primarias.b};
    color: ${props=>props.theme.cores.neutras.c};
    path {
      fill: ${props=>props.theme.cores.neutras.c};
    }
  }
`;

const Button = ({ children, variante = "primaria", click, disabled = false, type = "button" }) => {
  if(variante === "primaria") {
    return <StyledButtonOne onClick={click} type={type} disabled={disabled}>
      { children }
    </StyledButtonOne>;
  }
  return <StyledButtonTwo>
    { children }
  </StyledButtonTwo>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variante: PropTypes.string,
  type: PropTypes.string,
  click: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;