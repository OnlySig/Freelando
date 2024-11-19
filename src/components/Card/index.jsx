import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";

const StyledDiv = styled.div`
  padding: ${props => props.theme.espacamentos.l};
  background-color: ${props => props.theme.cores.secundarias.a};
  border: 1px solid ${props => props.theme.cores.primarias.a};
  border-radius: ${props => props.theme.espacamentos.s};
  margin: ${props => props.path === "/login" ? "36px auto 80px auto" : "80px auto"};
  max-width: 516px;
`;

const Card = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <StyledDiv path={pathname}>
      {children}
    </StyledDiv>
  );

};

Card.propTypes = {
  children: PropTypes.node.isRequired,  // children pode ser qualquer nó do React
};
export default Card;