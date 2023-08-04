import { useState, useEffect, useCallback } from "react";
import { Container, Hero, List } from "./app-styled";
import { getCategories } from "./service/api";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import CategoryCard from "./components/CategoryCard/CategoryCard";

function App() {
  const [categoryList, setCategoryList] = useState([]);

  const getData = useCallback(async () => {
    try {
      const data = await getCategories();
      setCategoryList(data);
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
        <CategoryCard data={item} />
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
      <List>{list}</List>
      <Footer />
    </Container>
  );
}

export default App;
