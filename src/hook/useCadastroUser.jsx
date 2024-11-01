import { useContext } from "react";
import CadastroUsuarioContext from "../context/CadastroUsuario";

const useCadastroUser = () => {
  return useContext(CadastroUsuarioContext);
};

export default useCadastroUser;