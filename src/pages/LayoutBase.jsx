import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "react-grid-system";

// eslint-disable-next-line react/prop-types
const LayoutBase = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default LayoutBase;