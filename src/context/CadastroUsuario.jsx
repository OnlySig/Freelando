import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  errors: {}
};
const CadastroUsuarioContext = createContext({
  usuario: initialUser,
  updateUserField: () => null,
  submitarUsuario: () => null,
  selectInteresse: () => null,
  errors: {}
});
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

  const formDadosPessoaisController = (field, message) => {
    usuario.errors = {
      [field]: message
    };
  };

  const submitarUsuario = () => {
    console.log(usuario);
    if(usuario.senha !== usuario.senhaConfimada) {
      formDadosPessoaisController("senha", "Senhas não são iguais!");
    } else {
      usuario.errors.senha = null;
    }
    if(!usuario.uf.text || !usuario.uf.value) {
      formDadosPessoaisController("uf", "Campo estado é obrigatório!");
    } else {
      usuario.errors.uf = null;
    }
    if(usuario.errors.senha || usuario.errors.uf) {
      return;
    }
      
    navegar("/cadastro/concluido");
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
      { children }
    </CadastroUsuarioContext.Provider>
  );
};

export default CadastroUsuarioContext;