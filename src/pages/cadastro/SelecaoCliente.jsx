import React from "react";
import Tipografia from "../../components/Tipografia";
import { Col, Row } from "react-grid-system";
import cliente from "../../images/cliente.png";
import freela from "../../images/freela.png";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledDiv = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 58px;
  a {
    color: ${props=>props.theme.cores.primarias.b}
  }
`;
const StyledAvatar = styled.div `
  text-align: center; 
  display: flex; 
  flex-direction: column; 
  align-items: center;
  p {
    max-width: 200px;
  }
  a {
    text-decoration: none;
    color: ${props=>props.theme.cores.neutras.a};
  }
`;

const SelecaoCliente = () => {
  return (
    <section style={{ textAlign: "center" }}>
      <div>
        <Tipografia tag="h1" variante="h1">
            Crie seu cadastro
        </Tipografia>
        <Tipografia tag="h3" variante="h3">
          Como podemos te ajudar?
        </Tipografia>
      </div>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <StyledAvatar>
            <Link to="interesses"> { /** NÃO PRECISA FAZER ASSIM: /cadastro/interesses */ }
              <img src={cliente} alt="foto de um cliente"/>
              <Tipografia variante="body" tag="body">
              Sou cliente e preciso de um freela!
              </Tipografia>
            </Link>
          </StyledAvatar>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <StyledAvatar>
            <img src={freela} alt="foto de um freelancer"/>
            <Tipografia variante="body" tag="body">
              Sou um freela e prociso de clientes!
            </Tipografia>
          </StyledAvatar>
        </Col>
      </Row>
      <StyledDiv>
        <span>Ja tem conta?</span>
        <Link to="/login">
          Faça login!
        </Link>
      </StyledDiv>
    </section>
  );
};

export default SelecaoCliente;