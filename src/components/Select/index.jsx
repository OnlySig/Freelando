import React, { useState } from "react";
import { ReactComponent as ArrowUp } from "../../images/icons/iconesComponentes/ícone expand less.svg";
import { ReactComponent as ArrowDown } from "../../images/icons/iconesComponentes/ícone expand.svg";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledLabel = styled.label `
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  position: absolute;
  z-index: 2;
  span {
    margin-bottom: 8px;
  }
  span {
    font-size: 20px;
    color: ${props=>props.theme.cores.neutras.a};
  }
  ul {
    max-height: 190px;
    overflow-y: scroll;
    padding: 0;
    background-color: #FFF;
    margin-top: 0;
    border: 1px solid ${props=>props.theme.cores.neutras.a};
    border-radius: 0 0 16px 16px;
  }
  ul::-webkit-scrollbar {
    display: none;
  } // faz sumir a scrollbar
  li {
    padding: 8px;
    border-bottom: 1px solid ${props=>props.theme.cores.neutras.b};
    text-align: center;
    list-style: none;
    cursor: pointer;
  }
  li:hover {
    background-color: ${props=>props.theme.cores.neutras.b};
  }
`;

const StyledButton = styled.button `
  border: 1px solid ${props=>props.theme.cores.neutras.a};
  border-start-start-radius: 16px;
  border-start-end-radius: 16px;
  border-bottom-right-radius: ${props=> props.toggle ? "0px" : "16px"};
  border-bottom-left-radius: ${props=> props.toggle ? "0px" : "16px"};
  background-color: #FFF;
  padding: 13px 16px;
  max-height: 44px;
  outline: none;
  font-size: 14px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: ${props=>props.theme.cores.neutras.a};
`;

const Select = ({ label, arry, selecionado, setSelecionado }) => {
  const [toggle, setToggle] = useState(false);
  if(!arry) return <h1>dados inválidos!</h1>;
  console.log(selecionado);
  return (
    <>
      <StyledLabel>
        <span>
          {label}
        </span>
        <StyledButton
          type="button" 
          toggle={toggle}
          onKeyDown={()=>setToggle(true)}
          onClick={()=>setToggle(!toggle)}
        >
          {selecionado.text === "" ? "Selecione" : selecionado.text }
          {toggle ?
            <ArrowUp />:
            <ArrowDown />
          }
        </StyledButton>
        {toggle && <ul>
          {arry?.map((e, index) => 
            <li 
              onClick={()=>setSelecionado(e)}
              key={index}>
              { e.text }
            </li>
          )}
        </ul>}
      </StyledLabel>
    </>
  );
};

Select.propTypes = {
  setSelecionado: PropTypes.func,
  selecionado: PropTypes.object, 
  label: PropTypes.string,
  arry: PropTypes.array
};

export default Select;