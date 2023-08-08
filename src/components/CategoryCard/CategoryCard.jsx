import { Container, CategoryContainer } from "./categoryCard-styled";
import PropTypes from "prop-types";

const CategoryCard = ({ data }) => {
  return (
    <Container>
      <p>{data.category_name}</p>
      <CategoryContainer>
        <p style={{ margin: "0" }}>{data.child_count} категорії</p>
      </CategoryContainer>
    </Container>
  );
};

export default CategoryCard;

CategoryCard.propTypes = {
  data: PropTypes.shape({
    category_name: PropTypes.string,
    child_count: PropTypes.number,
  }),
};
