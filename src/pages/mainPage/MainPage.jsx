import { useEffect, useCallback } from "react";
import { Hero, List } from "./mainPage.styled";
import FilterSearch from "../../components/Filter/FilterSearch";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { getCategories } from "../../service/api";
import { useCatalogue } from "../../service/store";
import { GoUp } from "../../components/buttons/buttons.jsx";

const MainPage = () => {
  const categoryList = useCatalogue((state) => state.catalogue);
  const setCategoryList = useCatalogue((state) => state.addCatalogue);

  const getData = useCallback(async () => {
    try {
      const data = await getCategories();
      setCategoryList(data);
    } catch (error) {
      alert(error.message);
    }
  }, [setCategoryList]);

  useEffect(() => {
    getData();
  }, [getData]);

  const list = categoryList.map((item) => {
    return (
      <CategoryCard
        style={{ width: "432px", height: "400px" }}
        key={item.id}
        data={item}
      ></CategoryCard>
    );
  });
  return (
    <>
      <Hero>
        Пориньте в різноманітний каталог<br/>продуктів від найкращих продавців і<br/>перевірених брендів
      </Hero>
      <FilterSearch />
      <List>{list}</List>
      <GoUp />
    </>
  );
};

export default MainPage;
