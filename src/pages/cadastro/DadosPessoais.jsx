import React from "react";
import Tipografia from "../../components/Tipografia";
import InputText from "../../components/InputText";
import { Col, Container, Row } from "react-grid-system";
import { ReactComponent as ArrowRigth } from "../../images/icons/iconeBotões/ícone próximo.svg";
import { ReactComponent as ArrowLeft } from "../../images/icons/iconeBotões/ícone voltar.svg";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { estados } from "../../components/Select/estados";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <Tipografia variante="h1" tag="h1">
          Freelando
        </Tipografia>
        <Tipografia variante="body" tag="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho. 
        </Tipografia>
      </div>
      <Row>
        <Col >
          <InputText require textLabel="Nome Completo"/>
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={4} sm={4}>
          <Select label="Estado" arry={estados}/>
        </Col>
        <Col lg={8} md={8} sm={8}>
          <InputText require textLabel="Cidade"/>
        </Col>
      </Row>
      <Row>
        <Col >
          <InputText require textLabel="Email"/>
        </Col>
      </Row>
      <Row >
        <Col lg={6} md={6} sm={6}>
          <InputText require textLabel="Senha"/>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <InputText require textLabel="Repita a senha"/>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={6} >
          <Link to="/cadastro/interesses" style={{ textDecoration: "none" }}>
            <Button variante="secundaria">
              <ArrowLeft/>
              Anterior
            </Button>
          </Link>
        </Col>
        <Col lg={6} md={6} sm={6} style={{ textAlign: "-webkit-right" }}>
          <Link to="/cadastro/concluido" style={{ textDecoration: "none" }}>
            <Button>
              Próximo
              <ArrowRigth/>
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;