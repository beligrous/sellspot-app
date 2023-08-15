import { Container } from "./app-styled";
import { RouterProvider } from "react-router-dom";
import { router } from "./service/router";

function App() {
  if (window.location.protocol.indexOf("https") == 0) {
    var el = document.createElement("meta");
    el.setAttribute("http-equiv", "Content-Security-Policy");
    el.setAttribute("content", "upgrade-insecure-requests");
    document.head.append(el);
  }

  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
