import Banner from "../../components/Banner";
import CardVantages from "../../components/CardVantages";
import { client } from "../../components/CardVantages/client";
import { freela } from "../../components/CardVantages/freela";
import { habilidade } from "../../components/CardVantages/habilidade";

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