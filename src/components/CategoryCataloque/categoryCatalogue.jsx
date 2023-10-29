import { useState } from "react";
import {
  Container,
} from "./categoryCatalogue-styled";
import { getCategoryById } from "../../service/api";
import { useCatalogue } from "../../service/store";
import CategoryCard from "../CategoryCard/CategoryCard";
import { BtnChipR } from "../buttons/buttons.jsx";

const CategoryCatalogue = ({ isVisible }) => {
  const categoryList = useCatalogue((state) => state.catalogue);
  const [categoryData, setCategoryData] = useState([]);

  const handleChooseItem = async (id) => {
    const data = await getCategoryById(id);
    setCategoryData(data);
  };

  return (
    <Container isVisible={isVisible}>
      <ul className='chips'>
        {categoryList.map((item) => (
          <li onClick={() => handleChooseItem(item.id)} key={item.id}>
            <BtnChipR
              text={item.category_name}
              width='272px'
            />
          </li>
        ))}
      </ul>
      <ul className='cards'>
        {categoryData.map((item) => (
          <div key={item.id}> {/* ключ для реакт, бо якщо покласти в стилізований компонент, тов воно думає шо то пропс для компонента */}
            <CategoryCard
              width="324px"
              height="192px"
              data={item}
            ></CategoryCard>
          </div>
        ))}
      </ul>
    </Container>
  );
};

export default CategoryCatalogue;
