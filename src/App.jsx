import { Container, Hero } from "./app-styled";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";

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
      <Footer />
    </Container>
  );
}

export default App;
