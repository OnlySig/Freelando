import { createContext, useState } from "react";
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

  const [isLogado, setLogado] = useState(!!StoreToken.accessToken);
  /* O uso dos dois sinais de exclamação (!!) é uma técnica comum em JavaScript para converter um valor em um booleano. Vamos entender isso melhor.
  No seu código, StoreToken.accessToken pode ser um valor que pode ser undefined, null, uma string vazia, ou uma string com valor. O que os dois sinais de exclamação fazem é:
  O primeiro ! nega o valor. Se StoreToken.accessToken for um valor "falsy" (como undefined, null, 0, "", etc.), o primeiro ! o transformará em true. Se for um valor "truthy" 
  (como uma string não vazia), ele se tornará false.
  O segundo ! nega novamente o resultado do primeiro. Assim, se o valor original era "falsy", o resultado final será false, e se era "truthy", o resultado final será true.
  Portanto, !!StoreToken.accessToken garante que isLogado será true se StoreToken.accessToken tiver um valor válido (ou seja, se o usuário estiver logado) e false caso contrário.*/

  const login = async (email, senha) => {
    try {
      const { data } = await http.post("auth/login", {
        email,
        senha
      });
      StoreToken.definirTokens(data.access_token, data.refresh_token);
      setLogado(true);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    StoreToken.remveToken();
    setLogado(false);
  };

  const context = {
    login,
    logout,
    isLogado
  };
  return (<SessaoUsuarioContext.Provider value={context}>
    {children}
  </SessaoUsuarioContext.Provider>);
};


export default SessaoUsuarioContext;