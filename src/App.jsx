import { Container } from "./app-styled";
import { RouterProvider } from "react-router-dom";
import { router } from "./service/router";

function App() {
  return (
    <Container>
      <RouterProvider
        router={router}
        fallbackElement={<p>LOADING, PLEASE WAIT</p>}
      />
    </Container>
  );
}

export default App;