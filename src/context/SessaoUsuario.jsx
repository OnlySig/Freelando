import { createContext } from "react";

const initialState = {
  isLogado: false,
};

const SessaoUsuarioContext = createContext({
  initialState,
  login: () => null,
  logout: () => null,
  perfil: {}
}); 

// eslint-disable-next-line react/prop-types
export const SessaoUsuarioProvider = ({ children }) => {

  const context = {
    
  };
  return (<SessaoUsuarioContext.Provider value={context}>
    { children }
  </SessaoUsuarioContext.Provider>);
};


export default SessaoUsuarioContext;