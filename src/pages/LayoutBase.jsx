import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "react-grid-system";

const LayoutBase = () => {
  return (
    <>
      <Header/>
      <Container>
        <Outlet/>
      </Container>
      <Footer/>
    </>
  );
};

export default LayoutBase;