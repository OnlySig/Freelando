import React from "react";
import Tipografia from "../../components/Tipografia";
import imgConcluido from "../../images/cliente-concluido.png";
import Button from "../../components/Button";
import { ReactComponent as ArrowLeft } from "../../images/icons/iconeBotões/ícone voltar.svg";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledImage = styled.img `
  width: -webkit-fill-available;
  border-radius: 16px;
  margin-bottom: 24px;
`;

const StyledDiv = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  a {
    display: flex;
    width: "fit-content";
    text-decoration: none;
  }
`;
const Concluido = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Tipografia tag="h2" variante="h2">
        Seu Perfil está completo!
      </Tipografia>
      <Tipografia tag="body" variante="body">
        Agora é só começar a se conectar com os melhores freelancers do mercado!
      </Tipografia>
      <StyledImage src={imgConcluido} alt="foto mulher sorrindo" />
      <StyledDiv>
        <Link to="/">
          <Button variante="secundaria">
            <ArrowLeft/>
            Voltar para a home  
          </Button>
        </Link>
      </StyledDiv>
    </div>
  );
};

export default Concluido;