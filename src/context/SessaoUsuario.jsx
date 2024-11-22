import { createContext } from "react";
import http from "../http";
import { StoreToken } from "../utils/StoreToken";

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
      const resp = await http.post("auth/login", {
        email,
        senha
      });
      StoreToken.definirTokens(resp.data.access_token, resp.data.refresh_token);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    console.log("deslogado");
  };

  const context = {
    login,
    logout
  };
  return (<SessaoUsuarioContext.Provider value={context}>
    {children}
  </SessaoUsuarioContext.Provider>);
};


export default SessaoUsuarioContext;