import React, { useState } from "react";
import GroupRadio from "../../components/GroupRadio";
import { opcoes } from "../../components/GroupRadio/opcoes";
import { Col, Row } from "react-grid-system";
import Button from "../../components/Button";
import { ReactComponent as ArrowRigth } from "../../images/icons/iconeBotões/ícone próximo.svg";
import { ReactComponent as ArrowLeft } from "../../images/icons/iconeBotões/ícone voltar.svg";
import Tipografia from "../../components/Tipografia";
import { Link } from "react-router-dom";

const Interesses = () => {
  const [opcao, setOpcao] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <Tipografia tag="h1" variante="h1">
        Crie seu cadastro 
      </Tipografia>
      <Tipografia tag="h3" variante="h3">
        Qual a área de interesse?
      </Tipografia>
      <GroupRadio opcoes={opcoes} valor={opcao} onChange={setOpcao}/>
      <Row style={{ marginTop: "32px" }}>
        <Col lg={6} md={6} sm={6} >
          <Link to=".." style={{ textDecoration: "none" }}>
            <Button variante="secundaria">
              <ArrowLeft/>
              Anterior
            </Button>
          </Link>
        </Col>
        <Col lg={6} md={6} sm={6} style={{ textAlign: "-webkit-right" }}>
          <Link to="/cadastro/dados-pessoais" style={{ textDecoration: "none" }}>
            <Button>
              Próximo
              <ArrowRigth/>
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Interesses;