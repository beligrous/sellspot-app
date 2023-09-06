import { useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  return (
    <>
      <p>breadcrumbs</p>
    </>
  );
};

export default BreadCrumbs;
