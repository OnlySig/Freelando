import styled from "@emotion/styled";
import logo from "../../assets/Logo-branco.svg";
import whatsapp from "../../assets/icons/Whatsapp.svg";
import twitch from "../../assets/icons/Twitch.svg";
import instagram from "../../assets/icons/Instagram.svg";
import twitter from "../../assets/icons/Twitter.svg";

const StyledFooter = styled.footer `
  background-color: ${props=>props.theme.cores.primarias.a};
  padding: 50px 120px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  div {
    display: flex;
    flex-direction: column;
    gap: ${props=>props.theme.espacamentos.s};
    color: ${props=>props.theme.cores.neutras.c};
    font-size: ${props=>props.theme.espacamentos.s};
  }
`;
const StyledLogo = styled.img `
  width: 170px;
`;
const StyledUl = styled.li `
  display: flex;
  gap: 8px;
  list-style: none;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <StyledLogo src={logo} alt="" />
        <span>Desenvolvido por Alura & Pereira. Projeto ficticio sem fins comerciais.</span>
      </div>
      <div>
        <span>Acesse nossas redes:</span>
        <StyledUl>
          <li>
            <img src={whatsapp} alt="" />
          </li>
          <li>
            <img src={twitch} alt="" />
          </li>
          <li>
            <img src={instagram} alt="" />
          </li>
          <li>
            <img src={twitter} alt="" />
          </li>
        </StyledUl>
      </div>
    </StyledFooter>
  );
};

export default Footer;