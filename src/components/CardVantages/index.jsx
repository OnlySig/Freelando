import styled from "@emotion/styled";

/* eslint-disable react/prop-types */
const StyledDiv = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5654ed37;
  height: 160px;
  max-width: 260px;
  border-radius: 16px;
  h3 {
    margin: 12px 0 0 0;
    text-align: center;
    font-weight: 500;
    color: ${props=>props.theme.cores.primarias.a};
    width: 230px;
  }
`;
const CardVantages = ({ vantagens, type }) => {
  return (
    <>
      {
        type === "freela" && 
        vantagens.map(vantagem => <StyledDiv key={vantagem.text}>
          <img src={vantagem.icon} alt="" />
          <h3>
            {vantagem.text}
          </h3>
        </StyledDiv>)
      }
    </>
  );
};

export default CardVantages;