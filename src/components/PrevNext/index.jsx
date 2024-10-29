import React from "react";
import { Col, Row } from "react-grid-system";
import { Link } from "react-router-dom";
import Button from "../Button";
import { ReactComponent as ArrowRigth } from "../../images/icons/iconeBotões/ícone próximo.svg";
import { ReactComponent as ArrowLeft } from "../../images/icons/iconeBotões/ícone voltar.svg";

// eslint-disable-next-line react/prop-types
const PrevNext = ({prev, next}) => {
  return (
    <Row style={{ marginTop: "32px" }}>
      <Col lg={6} md={6} sm={6} >
        <Link to={prev} style={{ textDecoration: "none" }}>
          <Button variante="secundaria">
            <ArrowLeft/>
            Anterior
          </Button>
        </Link>
      </Col>
      <Col lg={6} md={6} sm={6} style={{ textAlign: "-webkit-right" }}>
        <Link to={next} style={{ textDecoration: "none" }}>
          <Button>
            Próximo
            <ArrowRigth/>
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default PrevNext;