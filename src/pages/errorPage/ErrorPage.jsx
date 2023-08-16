import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <p>Ooops, something goes wrong...{error.message}</p>
      <Link to={"/sellspot-app"}>Go back to main page</Link>
    </>
  );
};

export default ErrorPage;
