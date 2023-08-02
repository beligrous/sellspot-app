import { useState, useEffect, useCallback } from "react";
import { Container, Hero } from "./app-styled";
import { getCategories } from "./service/api";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";

function App() {
  const [categoryList, setCategoryList] = useState([]);

  const getData = useCallback(async () => {
    try {
      const data = await getCategories();
      setCategoryList(data.results);
    } catch (error) {
      alert(error.message);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const list = categoryList.map((item) => {
    return (
      <li key={item.id}>
        <p>{item.category_name}</p>
      </li>
    );
  });

  return (
    <Container>
      <Header />
      <Hero>
        Пориньте в різноманітний каталог продуктів від найкращих продавців і
        перевірених брендів
      </Hero>
      <Filter />
      <ul>{list}</ul>
      <Footer />
    </Container>
  );
}

export default App;
