import { Container, CatalogueItem } from "./categoryCatalogue-styled";
import { useCatalogue } from "../../service/store";

const CategoryCatalogue = () => {
  const categoryList = useCatalogue((state) => state.catalogue);

  return (
    <Container>
      <div>
        <ul>
          {categoryList.map((item) => (
            <CatalogueItem key={item.id}>{item.category_name}</CatalogueItem>
          ))}
        </ul>
        <ul></ul>
      </div>
    </Container>
  );
};

export default CategoryCatalogue;
