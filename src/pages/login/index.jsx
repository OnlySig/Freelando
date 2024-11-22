import { Col, Container, Row } from "react-grid-system";
import Card from "../../components/Card";
import { StyledDiv } from "../../components/styledComponents/StyledDiv";
import InputText from "../../components/InputText";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import logoMarca from "../../assets/logoMarca.svg";
import Button from "../../components/Button";
import LoginIcon from "../../components/Icons/LoginIcon";
import { useState } from "react";
import useSessaoLogin from "../../hook/useSessaoLogin";

const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  text-align: justify;
`;

const ContainerForgetPass = styled.div`
  text-align: end;
  a {
    color: ${props => props.theme.cores.neutras.a};
  }
`;

const StyledImg = styled.img`
  margin-top: 76px;
`;

const StyledH1 = styled.h1`
  color: ${props => props.theme.cores.neutras.a};
  margin-top: 0px;
  font-size: 40px;
`;

const ContainerButton = styled.div`
  width: 100%;
  text-align: -webkit-center;
  padding: 40px 0;
  border-bottom: 1px solid ${props => props.theme.cores.primarias.a};
`;

const ContainerAncor = styled.div`
  a {
    color: ${props => props.theme.cores.primarias.b}
  }
`;

const Login = () => {
  const [email, setEmail] = useState("nsei@nsei.com");
  const [senha, setSenha] = useState("123");
  const { login } = useSessaoLogin();
  const handleClick = () => {
    if (!email || !senha) {
      return alert("ta faltando coisa ai kkkk");
    }
    login(email, senha);
  };
  return (
    <Container>
      <Row justify="center">
        <Col xxl={6} xl={6} lg={6} md={8} sm={12}>
          <div style={{ textAlign: "center" }}>
            <StyledImg src={logoMarca} alt="Logo do freelando." />
            <Card>
              <StyledDiv>
                <StyledH1>Efetuar Login</StyledH1>
                <ContainerLogin>
                  <InputText textLabel="Email" require value={email} setValue={(e) => setEmail(e)} />
                  <InputText textLabel="Senha" require value={senha} setValue={(e) => setSenha(e)} />
                  <ContainerForgetPass>
                    <Link to="#">
                      Esqueceu sua senha?
                    </Link>
                  </ContainerForgetPass>
                </ContainerLogin>
                <ContainerButton>
                  <Button onClick={handleClick}>
                    Login
                    <LoginIcon />
                  </Button>
                </ContainerButton>
                <ContainerAncor>
                  <p>Ainda não criou sua conta no Freelando?</p>
                  <Link to={"/cadastro"}>
                    Cadastre-se clicando aqui!
                  </Link>
                </ContainerAncor>
              </StyledDiv>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;