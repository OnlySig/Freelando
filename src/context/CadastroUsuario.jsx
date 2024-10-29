import React, { createContext, useState } from "react";
const initialUser = {
  perfil: "",
  interesse: "",
  nomeCompleto: "",
  estadoUF: "",
  cidade: "",
  email: "",
  senha: "",
  senhaConfimada: "",
};
export const CadastroUsuarioContext = createContext({
  initialUser,
  setPerfil: () => null,
  setInteresse: () => null,
  setNome: () => null,
  setUf: () => null,
  setCidade: () => null,
  setEmail: () => null,
  setSenha: () => null,
  setSenhaConfirm: () => null,
});

export const useCadastroUsuarioContext = () => {
  return useState(CadastroUsuarioContext);
};

// eslint-disable-next-line react/prop-types
export const CadastroUsuarioProvider = ({ children }) => {
  
  const [usuario, setUsuario] = useState(initialUser);

  const updateUserField = (field, value) => {
    setUsuario(prevUser => {
      return {
        ...prevUser,
        [field]: value
      };
    });
  };

  const context = {
    usuario,
    updateUserField,
  };
  return (
    <CadastroUsuarioContext.Provider value={context}>
      { children }
    </CadastroUsuarioContext.Provider>
  );
};