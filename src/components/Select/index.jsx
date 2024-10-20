import React from "react";

const estados = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"];

const Select = ({value, setValue}) => {
  return (
    <>
      <span>Estado</span>
      <select value={value} onChange={e=>setValue(e.target.value)}>
        {
          estados.map((estado, index) => 
            <option key={index} value={estado}>{estado}</option>
          )
        }
      </select>
    </>
  );
};

export default Select;