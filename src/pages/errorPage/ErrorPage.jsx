import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <p>Ooops, something goes wrong...{error.message}</p>
      <Link to={"/"}>Go back to main page</Link>
    </>
  );
};

export default ErrorPage;
