import Logo from "../../assets/Logo-branco.svg";
import styled from "@emotion/styled";

const StyledNav = styled.nav `
  background-color: ${props => props.theme.cores.primarias.a};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.espacamentos.m} 120px;
`;
const StyledLi = styled.li `
  color: ${props=>props.theme.cores.neutras.c};
  list-style: none;
  font-size: 20px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <StyledNav>
      <img src={Logo} alt="logo do freelando" />
      <ul>
        <StyledLi>Login</StyledLi>
      </ul>
    </StyledNav>
  );
};

export default Header;