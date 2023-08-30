import { Container } from "./categoryCatalogue-styled";
import { useCatalogue } from "../../service/store";

const CategoryCatalogue = () => {
  const categoryList = useCatalogue((state) => state.catalogue);

  return (
    <Container>
      <h2>Catalogue</h2>
      <div>
        <ul>
          {categoryList.map((item) => (
            <li key={item.id}>{item.category_name}</li>
          ))}
        </ul>
        <ul></ul>
      </div>
    </Container>
  );
};

export default CategoryCatalogue;
