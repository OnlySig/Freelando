import { Col, Row } from "react-grid-system";
import Tipografia from "../Tipografia";
import Button from "../Button";
import image from "../../assets/bannerImage.png";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledImage = styled.img `
  width: -webkit-fill-available;
  position: relative;
  right: -40px;
`;

const StyledDiv = styled.div `
  h1 {
    color: ${props=>props.theme.cores.primarias.b}
  }
`;

const Banner = () => {
  return (
    <Row style={{ display: "flex", alignItems: "center", padding: "32px 0px"}}>
      <Col sm={12} md={5}>
        <StyledDiv>
          <Tipografia tag="h1" variante="h1">
            Uma ponte entre os freelas mais talentosos e os projetos mais interessantes!
          </Tipografia>
        </StyledDiv>
        <Link to={"/cadastro"} style={{ display: "flex", width: "fit-content", textDecoration: "none"}}>
          <Button>
            Quero me cadastrar!
          </Button>
        </Link>
      </Col>
      <Col sm={12} md={7}>
        <StyledImage src={image} alt="" />
      </Col>
    </Row>
  );
};

export default Banner;