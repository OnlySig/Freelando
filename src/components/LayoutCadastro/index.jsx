import React from "react";
import Card from "../Card";
import { Col, Row } from "react-grid-system";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <Row justify="center" style={{ margin: 0 }}>
      <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12}>
        <Card>
          <Outlet/>
        </Card>
      </Col>
    </Row>
  );
};

export default index;