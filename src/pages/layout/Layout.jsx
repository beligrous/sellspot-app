import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";

const Layout = () => {
  return (
    <>
      <Header />
      <BreadCrumbs />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
