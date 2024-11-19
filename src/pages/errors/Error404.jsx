import LayoutBase from "../LayoutBase";
import { Col, Container, Row } from "react-grid-system";
import Card from "../../components/Card";
import styled from "@emotion/styled";
import erro404 from "../../assets/erro404.png";
import Button from "../../components/Button";
import ArrowLeft from "../../components/Icons/ArrowLeft";
import { Link } from "react-router-dom";
import { StyledDiv } from "../../components/styledComponents/StyledDiv";

const StyledImage = styled.img`
  max-width: 100%;
`;

const Error404 = () => {
  return (
    <LayoutBase>
      <Container>
        <Row justify="center">
          <Col xxl={6} xl={6} lg={6} md={8} sm={12}>
            <Card>
              <StyledDiv>
                <h1>Ops... Página não encontrada :(</h1>
                <StyledImage src={erro404} />
                <p>
                  Não encontramos a página que você está buscando, mas temos
                  muitas outras para você navegar!
                </p>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <Button variante="secundaria">
                    <ArrowLeft /> Voltar para a home
                  </Button>
                </Link>
              </StyledDiv>
            </Card>
          </Col>
        </Row>
      </Container>
    </LayoutBase>
  );
};

export default Error404;
