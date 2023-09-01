import { useCallback, useState } from "react";
import {
  Container,
  CatalogueItem,
  ItemButton,
} from "./categoryCatalogue-styled";
import { getCategoryById } from "../../service/api";
import { useCatalogue } from "../../service/store";

const CategoryCatalogue = () => {
  const categoryList = useCatalogue((state) => state.catalogue);
  const [categoryData, setCategoryData] = useState([]);

  const getCategoryData = useCallback(async (id) => {
    try {
      const data = await getCategoryById(id);
      setCategoryData(data);
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const handleChooseItem = (id) => {
    getCategoryData(id);
  };

  return (
    <Container>
      <div>
        <ul>
          {categoryList.map((item) => (
            <CatalogueItem key={item.id}>
              {item.category_name}
              <ItemButton
                onClick={() => handleChooseItem(item.id)}
              ></ItemButton>
            </CatalogueItem>
          ))}
        </ul>
        <ul>
          {categoryData.map((item) => (
            <li key={item.id}>{item.category_name}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default CategoryCatalogue;
