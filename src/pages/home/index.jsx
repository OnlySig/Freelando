import Banner from "../../components/Banner";
import CardVantages from "../../components/CardVantagens";
import { client } from "../../components/CardVantagens/client";
import { freela } from "../../components/CardVantagens/freela";
import { habilidade } from "../../components/CardVantagens/habilidade";

const HomePage = () => {
  return (
    <>
      <Banner/>
      <CardVantages type="freela" vantagens={freela} title="Vantagens para contratantes"/>
      <CardVantages type="client" vantagens={client} title="Vantagens para freelas"/>
      <CardVantages type="habilidade" vantagens={habilidade} title="Quais habilidades você encontra por aqui?"/>
    </>
  );
};

export default HomePage;