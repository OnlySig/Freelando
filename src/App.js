import React from "react";
import { Estilos } from "./components/GlobalStyles/Styles";
import Card from "./components/Card";
import CompThemeProvider from "./components/ThemeProvider";
import Header from "./components/Header";
import Tipografia from "./components/Tipografia";
import InputText from "./components/InputText";
import Footer from "./components/Footer";

function App() {
  return (
    <CompThemeProvider>
      <Estilos/>
      <Header/>
      <Card>
        <Tipografia variante="h1" tag="h1">
          Freelando
        </Tipografia>
        <Tipografia variante="body" tag="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho. 
        </Tipografia>
        <InputText require textLabel="Nome Completo"/>
      </Card>
      <Footer/>
    </CompThemeProvider>
  );
}

export default App;
