import React from "react";
import GroupRadio from "../../components/GroupRadio";
import { opcoes } from "../../components/GroupRadio/opcoes";
import Tipografia from "../../components/Tipografia";
import PrevNext from "../../components/PrevNext";
import { useCadastroUsuarioContext } from "../../context/CadastroUsuario";

const Interesses = () => {
  const { updateUserField, usuario } = useCadastroUsuarioContext();
  console.log(usuario);
  return (
    <div style={{ textAlign: "center" }}>
      <Tipografia tag="h1" variante="h1">
        Crie seu cadastro 
      </Tipografia>
      <Tipografia tag="h3" variante="h3">
        Qual a área de interesse?
      </Tipografia>
      <GroupRadio opcoes={opcoes} valor={usuario.interesse} onChange={(e) => updateUserField("interesse", e)}/>
      <PrevNext prev=".." next="/cadastro/dados-pessoais" disabled={!usuario.interesse}/>
    </div>
  );
};

export default Interesses;