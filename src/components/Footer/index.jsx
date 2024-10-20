import styled from "@emotion/styled";
import React from "react";
import {ReactComponent as Logo} from "../../images/Logo-branco.svg";
import {ReactComponent as Whatsapp} from "../../images/icons/iconesRedesSociais/Whatsapp.svg";
import {ReactComponent as Twitch} from "../../images/icons/iconesRedesSociais/Twitch.svg";
import {ReactComponent as Instagram} from "../../images/icons/iconesRedesSociais/Instagram.svg";
import {ReactComponent as Twitter} from "../../images/icons/iconesRedesSociais/Twitter.svg";

const StyledFooder = styled.footer `
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
const StyledUl = styled.li `
  display: flex;
  gap: 8px;
  list-style: none;
`;

const Footer = () => {
  return (
    <StyledFooder>
      <div>
        <Logo/>
        <span>Desenvolvido por Alura & Pereira. Projeto ficticio sem fins comerciais.</span>
      </div>
      <div>
        <span>Acesse nossas redes:</span>
        <StyledUl>
          <li>
            <Whatsapp/>
          </li>
          <li>
            <Twitch/>
          </li>
          <li>
            <Instagram/>
          </li>
          <li>
            <Twitter/>
          </li>
        </StyledUl>
      </div>
    </StyledFooder>
  );
};

export default Footer;