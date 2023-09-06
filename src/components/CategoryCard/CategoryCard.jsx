import {
  Container,
  InnerCategory,
  CategoryData,
  CategoryLink,
} from "./categoryCard-styled";
import PropTypes from "prop-types";

const CategoryCard = ({ data, width, height }) => {
  return (
    <Container width={width} height={height}>
      <CategoryLink to={`/${data.id}`} image={data.image_url}>
        <CategoryData>
          <p>{data.category_name}</p>
          <InnerCategory>
            <p style={{ margin: "0" }}>{data.child_count} категорії</p>
          </InnerCategory>
        </CategoryData>
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
    image_url: PropTypes.string,
  }),
  width: PropTypes.string,
  height: PropTypes.string,
};
