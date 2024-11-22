import Banner from "../../components/Banner";
import imgBanner from "../../assets/perfil-bg.png";
import { Col, Container, Row } from "react-grid-system";
import Card from "../../components/Card";
import imgPerfilDefault from "../../assets/userImgDefault.png";
import { StyledDiv } from "../../components/styledComponents/StyledDiv";
import styled from "@emotion/styled";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import Salvar from "../../components/Icons/Salvar";
import { useEffect, useState } from "react";
import http from "../../http";
import { StoreToken } from "../../utils/StoreToken";
import { useNavigate } from "react-router-dom";

const FormContent = styled.form`
  text-align: justify;
  margin: 80px 0;
  h1 {
    margin-bottom: 32px;
  }
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledHalfInput = styled.div`
  display: inline-flex;
  gap: 24px;
`;

const ContainerBtn = styled.div`
  margin-top: 24px;
  button {
    width: -webkit-fill-available;
    display: flex;
    justify-content: center;
  }
`;

const Perfil = () => {
  const navegar = useNavigate();
  const token = StoreToken.accessToken;
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [pais, setPais] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (!token) navegar("/login");
    const getUser = async () => {
      const user = await http.get("profile");
      console.log(user);
    };
    getUser();
  }, []);
  return (
    <>
      <Banner variant="secundaria" title="Meu perfil" img={imgBanner} />
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <Card>
              <StyledDiv>
                <h2>Nome do usuário</h2>
                <img src={imgPerfilDefault} alt="" />
              </StyledDiv>
            </Card>
          </Col>
          <Col sm={12} md={8}>
            <FormContent onSubmit={handleSubmit}>
              <h1>Revise seus dados</h1>
              <ContainerInput>
                <InputText textLabel="Nome" value={nome} setValue={e => setNome(e)} />
                <InputText textLabel="Sobrenome" value={sobrenome} setValue={e => setSobrenome(e)} />
                <StyledHalfInput>
                  <InputText textLabel="Celular" value={celular} setValue={e => setCelular(e)} />
                  <InputText textLabel="Email" value={email} setValue={e => setEmail(e)} />
                </StyledHalfInput>
                <StyledHalfInput>
                  <InputText textLabel="Código postal" value={cep} setValue={e => setCep(e)} />
                  <InputText textLabel="País" value={pais} setValue={e => setPais(e)} />
                </StyledHalfInput>
              </ContainerInput>
              <Row>
                <Col sm={6} md={6}>
                  <ContainerBtn>
                    <Button type="submit">
                      Salvar
                      <Salvar />
                    </Button>
                  </ContainerBtn>
                </Col>
              </Row>
            </FormContent>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Perfil;