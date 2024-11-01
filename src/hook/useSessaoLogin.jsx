import { useContext } from "react";
import SessaoUsuarioContext from "../context/SessaoUsuario";

const useSessaoLogin = () => {
  return useContext(SessaoUsuarioContext); 
};

export default useSessaoLogin;