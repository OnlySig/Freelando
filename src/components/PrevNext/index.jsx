import { Col, Row } from "react-grid-system";
import { Link } from "react-router-dom";
import Button from "../Button";
import ArrowRigth from "../Icons/ArrowRigth";
import ArrowLeft from "../Icons/ArrowLeft";

// eslint-disable-next-line react/prop-types
const PrevNext = ({prev, next, onClick, disabled, form = false}) => {
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
        {!form ? <Link to={next} style={{ textDecoration: "none" }} onClick={onClick}>
          <Button disabled={disabled} type="submit">
            Próximo
            <ArrowRigth/>
          </Button>
        </Link> :
          <Button disabled={disabled} type="submit">
            Próximo
            <ArrowRigth/>
          </Button>
        }
      </Col>
    </Row>
  );
};

export default PrevNext;