import { useState, useEffect, useCallback } from "react";
import { Container, Hero, List } from "./app-styled";
import { getCategories } from "./service/api";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import CategoryCard from "./components/CategoryCard/CategoryCard";

function App() {
  const [categoryList, setCategoryList] = useState([]);

  if (window.location.protocol.indexOf("https") == 0) {
    var el = document.createElement("meta");
    el.setAttribute("http-equiv", "Content-Security-Policy");
    el.setAttribute("content", "upgrade-insecure-requests");
    document.head.append(el);
  }

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
    return <CategoryCard key={item.id} data={item}></CategoryCard>;
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
