import React from "react";
import Tipografia from "../../components/Tipografia";
import InputText from "../../components/InputText";
import { Col, Container, Row } from "react-grid-system";
import Select from "../../components/Select";
import { estados } from "../../components/Select/estados";
import PrevNext from "../../components/PrevNext";

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
      <PrevNext prev="/cadastro/interesses" next="/cadastro/concluido"/>
    </Container>
  );
};

export default HomePage;