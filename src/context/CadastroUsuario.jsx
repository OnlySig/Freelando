import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  usuario: initialUser,
  updateUserField: () => null,
  submitarUsuario: () => null
});

export const useCadastroUsuarioContext = () => {
  return useContext(CadastroUsuarioContext);
};

// eslint-disable-next-line react/prop-types
export const CadastroUsuarioProvider = ({ children }) => {
  
  const navegar = useNavigate();

  const [usuario, setUsuario] = useState(initialUser);
  const updateUserField = (field, value) => {
    setUsuario(prevUser => {
      return {
        ...prevUser,
        [field]: value
      };
    });
  };

  const submitarUsuario = () => {
    console.log(usuario);
    navegar("/cadastro/concluido");
  };

  const context = {
    usuario,
    updateUserField,
    submitarUsuario,
  };
  return (
    <CadastroUsuarioContext.Provider value={context}>
      { children }
    </CadastroUsuarioContext.Provider>
  );
};