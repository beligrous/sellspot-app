import { useParams } from "react-router-dom";
import { useEffect, useCallback, useState } from "react";
import { List } from "./categoryPage-styled";
import { getCategoryById } from "../../service/api";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

const CategoryPage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const { id } = useParams();

  const getCategoryData = useCallback(async () => {
    try {
      const data = await getCategoryById(id);
      setCategoryList(data);
    } catch (error) {
      alert(error.message);
    }
  }, [id]);

  useEffect(() => {
    getCategoryData();
  }, [getCategoryData]);

  return (
    <>
      <h2>CategoryPage here:</h2>
      <List>
        {categoryList.map((item) => (
          <CategoryCard key={item.id} data={item}></CategoryCard>
        ))}
      </List>
    </>
  );
};

export default CategoryPage;
