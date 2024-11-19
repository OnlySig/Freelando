import styled from "@emotion/styled";
/* eslint-disable react/prop-types */
const StyledRowFreela = styled.div `
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;
const StyledDivFreela = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5654ed37;
  height: 194px;
  width: 282px;
  flex-grow: 1;
  @media screen and (max-width: 1600px) {
    height: 160px;
    width: 250px;
  }
  border-radius: 16px;
  h3 {
    margin: 12px 0 0 0;
    text-align: center;
    font-weight: 500;
    color: ${props=>props.theme.cores.primarias.a};
    width: 230px;
  }
`;
const StyledH1 = styled.h1 `
  text-align: center;
  color: ${props=>props.theme.cores.neutras.a};
  margin: 80px 0 32px 0;
`;
const StyledDivClient = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 26px 0;
  gap: 16px;
  width: 500px;
  color: ${props=>props.theme.cores.primarias.c};
  background-color: ${props=>props.theme.cores.secundarias.c};
  border-radius: 16px;
  h3 {
    width: 300px;
  }
`;
const ContainerStyledDiv = styled.div `
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
`;
const StyledDivHabilit = styled.div `
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto 48px auto;

  span {
    padding: 10px 16px;
    border-radius: 16px;
    color: ${props=>props.theme.cores.neutras.a};
    border: 1px solid ${props=>props.theme.cores.neutras.a};
  }
`;

const CardVantages = ({ vantagens, type, title }) => {
  return (
    <>
      <StyledH1 style={{ textAlign: "center" }}>{title}</StyledH1>
      <StyledRowFreela>
        {type === "freela" && 
          vantagens.map(vantagem => <StyledDivFreela key={vantagem.text}>
            <img src={vantagem.icon} alt={vantagem.text}/>
            <h3>
              {vantagem.text}
            </h3>
          </StyledDivFreela>)}
      </StyledRowFreela>
      <ContainerStyledDiv>
        {type === "client" &&
          vantagens.map(vantagem => <StyledDivClient key={vantagem.text}>
            <img src={vantagem.icon} alt={vantagem.text}/>
            <h3>{vantagem.text}</h3>
          </StyledDivClient>)}
      </ContainerStyledDiv>
      <StyledDivHabilit>
        {type === "habilidade" && 
        vantagens.map(vantagem => 
          <span key={vantagem}>{vantagem}</span>
        )}
      </StyledDivHabilit>
    </>
  );
};

export default CardVantages;