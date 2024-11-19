import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
import http from "../http";
const initialUser = {
  perfil: "",
  interesse: "",
  nomeCompleto: "",
  uf: {
    text: "",
    value: ""
  },
  cidade: "",
  email: "",
  senha: "",
  senhaConfimada: "",
};
const CadastroUsuarioContext = createContext({
  usuario: initialUser,
  updateUserField: () => null,
  submitarUsuario: async () => null,
  selectInteresse: () => null,
});
// eslint-disable-next-line react/prop-types
export const CadastroUsuarioProvider = ({ children }) => {
  const navegar = useNavigate();
  const [usuario, setUsuario] = useState(initialUser);
  const errors = {};

  const updateUserField = (field, value) => {
    setUsuario(prevUser => {
      return {
        ...prevUser,
        [field]: value
      };
    });
  };

  const submitarUsuario = async () => {
    if (usuario.senha !== usuario.senhaConfimada) {
      errors.senha = "senha invalida";
    } else {
      errors.senha = null;
      //setError(null);
    }
    if (!usuario.uf.text || !usuario.uf.value) {
      errors.uf = "sem endereco";
    } else {
      errors.uf = null;
    }
    if (errors.senha || errors.uf) {
      return;
    }
    try {
      await http.post("auth/register", usuario);
      navegar("/cadastro/concluido");
    } catch (error) {
      console.error(error);
    }
  };

  const selectInteresse = () => {
    return usuario.perfil.length !== 0;
  };

  const context = {
    usuario,
    updateUserField,
    submitarUsuario,
    selectInteresse,
  };
  return (
    <CadastroUsuarioContext.Provider value={context}>
      {children}
    </CadastroUsuarioContext.Provider>
  );
};

export default CadastroUsuarioContext;