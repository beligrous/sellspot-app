import { useState } from "react";
import {
  Container,
  CatalogueItem,
  ItemButton,
} from "./categoryCatalogue-styled";
import { getCategoryById } from "../../service/api";
import { useCatalogue } from "../../service/store";
import CategoryCard from "../CategoryCard/CategoryCard";

const CategoryCatalogue = () => {
  const categoryList = useCatalogue((state) => state.catalogue);
  const [categoryData, setCategoryData] = useState([]);

  const handleChooseItem = async (id) => {
    const data = await getCategoryById(id);
    setCategoryData(data);
  };

  return (
    <Container>
      <div style={{ display: "flex" }}>
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
        <ul style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
          {categoryData.map((item) => (
            <CategoryCard
              width="324px"
              height="192px"
              key={item.id}
              data={item}
            ></CategoryCard>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default CategoryCatalogue;
