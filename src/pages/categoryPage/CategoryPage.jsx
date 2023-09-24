import { useParams, useLocation } from "react-router-dom";
import { useEffect, useCallback, useState } from "react";
import { List } from "../categoryPage/categoryPage-styled";
import { getCategoryById } from "../../service/api";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

const CategoryPage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const categoryTitle = location.state.from;

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
      <h2>{categoryTitle}</h2>
      <List>
        {categoryList ? (
          categoryList.map((item) => (
            <CategoryCard key={item.id} data={item}></CategoryCard>
          ))
        ) : (
          <span>There is no categories yet</span>
        )}
      </List>
    </>
  );
};

export default CategoryPage;
