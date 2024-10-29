import React from "react";
import Card from "../Card";
import { Col, Row } from "react-grid-system";
import { Outlet } from "react-router-dom";
import { CadastroUsuarioProvider } from "../../context/CadastroUsuario";

const LayoutCadastro = () => {
  return (
    <CadastroUsuarioProvider>
      <Row justify="center">
        <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12}>
          <Card>
            <Outlet/>
          </Card>
        </Col>
      </Row>
    </CadastroUsuarioProvider>
  );
};

export default LayoutCadastro;