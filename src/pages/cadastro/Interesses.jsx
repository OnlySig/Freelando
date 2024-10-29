import React, { useState } from "react";
import GroupRadio from "../../components/GroupRadio";
import { opcoes } from "../../components/GroupRadio/opcoes";
import Tipografia from "../../components/Tipografia";
import PrevNext from "../../components/PrevNext";

const Interesses = () => {
  const [opcao, setOpcao] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <Tipografia tag="h1" variante="h1">
        Crie seu cadastro 
      </Tipografia>
      <Tipografia tag="h3" variante="h3">
        Qual a área de interesse?
      </Tipografia>
      <GroupRadio opcoes={opcoes} valor={opcao} onChange={setOpcao}/>
      <PrevNext prev=".." next="/cadastro/dados-pessoais"/>
    </div>
  );
};

export default Interesses;