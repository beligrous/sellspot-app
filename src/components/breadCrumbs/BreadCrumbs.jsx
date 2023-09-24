import { useLocation, Link } from "react-router-dom";
import { Crumb, Container, Img } from "./breadCrumbs-styled";

const BreadCrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  // const path = location.state ? location.state.from : location.pathname;
  const path = location.pathname;

  const crumbs = path
    .split("/")
    .filter((item) => item !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <Crumb key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
          <Img></Img>
        </Crumb>
      );
    });

  return (
    <nav>
      <Container>{crumbs.length !== 0 && crumbs}</Container>
    </nav>
  );
};

export default BreadCrumbs;
