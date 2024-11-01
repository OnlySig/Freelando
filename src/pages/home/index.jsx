import styled from "@emotion/styled";
import Banner from "../../components/Banner";
import CardVantages from "../../components/CardVantages";
import {freela} from "../../components/CardVantages/freela";
const StyledRowFreela = styled.div `
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
`;
const HomePage = () => {
  return (
    <>
      <Banner/>
      <StyledRowFreela>
        <CardVantages type="freela" vantagens={freela}/>
      </StyledRowFreela>
    </>
  );
};

export default HomePage;