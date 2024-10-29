import React from "react";
import RadioBtn from "../RadioBtn";

const index = ({ opcoes, valor, onChange }) => {
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

export default index;