import {
  Container,
  CategoryContainer,
  CategoryLink,
} from "./categoryCard-styled";
import PropTypes from "prop-types";

const CategoryCard = ({ data, width, height }) => {
  return (
    <Container width={width} height={height}>
      <CategoryLink to={`/${data.id}`}>
        <p>{data.category_name}</p>
        <CategoryContainer>
          <p style={{ margin: "0" }}>{data.child_count} категорії</p>
        </CategoryContainer>
      </CategoryLink>
    </Container>
  );
};

export default CategoryCard;

CategoryCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    category_name: PropTypes.string,
    child_count: PropTypes.number,
  }),
  width: PropTypes.string,
  height: PropTypes.string,
};
