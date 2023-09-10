import { useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();

  let crumbs = "";
  crumbs = location.pathname;

  return <nav>{<span>{crumbs}</span>}</nav>;
};

export default BreadCrumbs;
