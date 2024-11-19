import { Link } from "react-router-dom";
import Logo from "../../assets/Logo-branco.svg";
import styled from "@emotion/styled";

const StyledNav = styled.nav`
  background-color: ${props => props.theme.cores.primarias.a};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.espacamentos.m} 120px;
`;
const StyledLi = styled.li`
  list-style: none;
  font-size: 20px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${props => props.theme.cores.neutras.c};
  }
`;

const Header = () => {
  return (
    <StyledNav>
      <Link to={"/"}>
        <img src={Logo} alt="logo do freelando" />
      </Link>
      <ul>
        <StyledLi>
          <Link to={"/login"}>
            Login
          </Link>
        </StyledLi>
      </ul>
    </StyledNav>
  );
};

export default Header;