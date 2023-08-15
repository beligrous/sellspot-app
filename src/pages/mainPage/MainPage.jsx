import { useState, useEffect, useCallback } from "react";
import { Hero, List } from "./mainPage.styled";
import Filter from "../../components/Filter/Filter";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { getCategories } from "../../service/api";

const MainPage = () => {
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
    return <CategoryCard key={item.id} data={item}></CategoryCard>;
  });
  return (
    <>
      <Hero>
        Пориньте в різноманітний каталог продуктів від найкращих продавців і
        перевірених брендів
      </Hero>
      <Filter />
      <List>{list}</List>
    </>
  );
};

export default MainPage;
