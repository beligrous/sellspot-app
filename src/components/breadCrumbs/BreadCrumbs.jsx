import { useLocation } from "react-router-dom";
import {
  Crumb,
  Container,
  LinkCrumb,
  Img,
  CrumbSection,
} from "./breadCrumbs-styled";

const BreadCrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  // const path = location.state ? location.state.fromId : location.pathname;
  const path = location.pathname;

  const crumbs = path
    .split("/")
    .filter((item) => item !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <Crumb key={crumb}>
          <Img></Img>
          <LinkCrumb to={currentLink}>{crumb}</LinkCrumb>
        </Crumb>
      );
    });

  return (
    <CrumbSection>
      <Container>{crumbs.length !== 0 && crumbs}</Container>
    </CrumbSection>
  );
};

export default BreadCrumbs;
