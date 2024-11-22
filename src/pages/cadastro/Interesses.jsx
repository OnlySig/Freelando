import { useEffect } from "react";
import GroupRadio from "../../components/GroupRadio";
import { opcoes } from "../../components/GroupRadio/opcoes";
import Tipografia from "../../components/Tipografia";
import PrevNext from "../../components/PrevNext";
import { useNavigate } from "react-router-dom";
import useCadastroUser from "../../hook/useCadastroUser";

const Interesses = () => {
  const {
    updateUserField,
    usuario,
    selectInteresse
  } = useCadastroUser();

  const navegar = useNavigate();
  useEffect(() => {
    if (!selectInteresse()) {
      navegar("/cadastro");
    }
  }, [navegar, selectInteresse]);
  return (
    <div style={{ textAlign: "center" }}>
      <Tipografia tag="h1" variante="h1">
        Crie seu cadastro
      </Tipografia>
      <Tipografia tag="h3" variante="h3">
        Qual a área de interesse?
      </Tipografia>
      <GroupRadio opcoes={opcoes} valor={usuario.interesse} onChange={(opcao) => updateUserField("interesse", opcao)} />
      <PrevNext prev=".." next="/cadastro/dados-pessoais" disabled={!usuario.interesse} />
    </div>
  );
};

export default Interesses;