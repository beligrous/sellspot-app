import { Container, Hero } from "./app-styled";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <Container>
      <Header />
      <Hero>
        Пориньте в різноманітний каталог продуктів від найкращих продавців і
        перевірених брендів
      </Hero>
      <Filter />
      <p>main page</p>
    </Container>
  );
}

export default App;
