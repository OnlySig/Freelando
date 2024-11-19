import Tipografia from "../../components/Tipografia";
import InputText from "../../components/InputText";
import { Col, Container, Row } from "react-grid-system";
import Select from "../../components/Select";
import { estados } from "../../components/Select/estados";
import PrevNext from "../../components/PrevNext";
import useCadastroUser from "../../hook/useCadastroUser";

const DadosPessoais = () => {
  const {
    usuario,
    updateUserField,
    submitarUsuario
  } = useCadastroUser();
  const handleSubmit = async (e) => {
    e.preventDefault();
    submitarUsuario();
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
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
            <InputText
              require
              textLabel="Nome Completo"
              value={usuario.nomeCompleto}
              setValue={nome => updateUserField("nomeCompleto", nome)}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={4}>
            <Select
              label="Estado"
              arry={estados}
              selecionado={usuario.uf}
              setSelecionado={estado => updateUserField("uf", estado)}
            />
          </Col>
          <Col lg={8} md={8} sm={8}>
            <InputText
              require
              textLabel="Cidade"
              value={usuario.cidade}
              setValue={cidade => updateUserField("cidade", cidade)}
            />
          </Col>
        </Row>
        <Row>
          <Col >
            <InputText
              require
              textLabel="Email"
              type="email"
              value={usuario.email}
              setValue={email => updateUserField("email", email)}
            />
          </Col>
        </Row>
        <Row >
          <Col lg={6} md={6} sm={6}>
            <InputText
              require
              textLabel="Senha"
              type="password"
              value={usuario.senha}
              setValue={senha => updateUserField("senha", senha)}
            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <InputText
              require
              textLabel="Repita a senha"
              value={usuario.senhaConfimada}
              type="password"
              setValue={passConfirm => updateUserField("senhaConfimada", passConfirm)}
            />
          </Col>
        </Row>
        <PrevNext prev="/cadastro/interesses" next="/cadastro/concluido" form={true} />
      </form>
    </Container>
  );
};

export default DadosPessoais;