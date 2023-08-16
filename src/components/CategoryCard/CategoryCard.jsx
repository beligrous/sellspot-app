import { Container, CategoryContainer } from "./categoryCard-styled";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CategoryCard = ({ data }) => {
  return (
    <Container>
      <Link to={`/sellspot-app/${data.id}`}>
        <p>{data.category_name}</p>
        <CategoryContainer>
          <p style={{ margin: "0" }}>{data.child_count} категорії</p>
        </CategoryContainer>
      </Link>
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
};
