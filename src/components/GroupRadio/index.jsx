/* eslint-disable react/prop-types */
import React from "react";
import RadioBtn from "../RadioBtn";

const GroupRadio = ({ opcoes, valor, onChange }) => {
  if(!opcoes) return <h1>Sem dados!</h1>;
  return (
    <div>
      {opcoes?.map(opcao =>
        <RadioBtn
          key={opcao.valor}
          valor={opcao.valor}
          radioText={opcao.label}
          checked={opcao.valor === valor}
          onClick={()=>onChange(opcao.valor)}
        />
      )}
    </div>
  );
};

export default GroupRadio;