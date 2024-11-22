import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LayoutBase = ({ children }) => {
  return (
    <>
      <Header />
      <Outlet />
      {children}
      <Footer />
    </>
  );
};

export default LayoutBase;