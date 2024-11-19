import axios from "axios";
import { createContext } from "react";

const SessaoUsuarioContext = createContext({
  isLogado: false,
  // eslint-disable-next-line no-unused-vars
  login: (email, senha) => null,
  logout: () => null,
  perfil: {}
});

// eslint-disable-next-line react/prop-types
export const SessaoUsuarioProvider = ({ children }) => {

  const login = async (email, senha) => {
    try {
      const resp = await axios.post("http://localhost:8080/auth/login", {
        email,
        senha
      });
      console.log(resp);
    } catch (error) {
      console.error(error);
    }
  };

  const context = {
    login
  };
  return (<SessaoUsuarioContext.Provider value={context}>
    {children}
  </SessaoUsuarioContext.Provider>);
};


export default SessaoUsuarioContext;