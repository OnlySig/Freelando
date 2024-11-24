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
  const [objForm, setObjForm] = useState({});
  const [nome, setNome] = useState("");
  const [firstName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const getUser = async () => {
      const { data } = await http.get("profile");
      setObjForm({ ...data });
      setNome(data.nomeCompleto);
      if (data?.nomeCompleto) {
        const name = data.nomeCompleto.split(" ");
        setFristName(name[0]);
        setLastName(() => {
          if (name[1]) return name[1];
          if (!name[1]) return "sem sobrenome";
        });
      }
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
                <h2>{nome || "Nome do usuário"}</h2>
                <img src={imgPerfilDefault} alt="" />
              </StyledDiv>
            </Card>
          </Col>
          <Col sm={12} md={8}>
            <FormContent onSubmit={handleSubmit}>
              <h1>Revise seus dados</h1>
              <ContainerInput>
                <InputText textLabel="Nome" value={firstName} />
                <InputText textLabel="Sobrenome" value={lastName} />
                <StyledHalfInput>
                  <InputText textLabel="Celular" value={objForm.celular} setValue={e => setObjForm(prevTxt => {
                    return {
                      ...prevTxt,
                      celular: objForm.celular = e
                    };
                  })} />
                  <InputText textLabel="Email" value={objForm.email} setValue={e => setObjForm(prevTxt => {
                    return {
                      ...prevTxt,
                      email: objForm.email = e
                    };
                  })} />
                </StyledHalfInput>
                <StyledHalfInput>
                  <InputText textLabel="Código postal" value={objForm.cep} setValue={e => setObjForm(prevTxt => {
                    return {
                      ...prevTxt,
                      cep: objForm.cep = e
                    };
                  })} />
                  <InputText textLabel="País" value={objForm.pais} setValue={e => setObjForm(prevTxt => {
                    return {
                      ...prevTxt,
                      pais: objForm.pais = e
                    };
                  })} />
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