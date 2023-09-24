import {
  Container,
  InnerCategory,
  CategoryData,
  CategoryLink,
} from "./categoryCard-styled";
import { usePath } from "../../service/store";
import PropTypes from "prop-types";

const CategoryCard = ({ data, width, height }) => {
  const addPath = usePath((state) => state.addPath);
  const path = usePath((state) => state.path);

  const handleAddPath = () => {
    addPath(data.id);
  };

  return (
    <Container width={width} height={height} onClick={handleAddPath}>
      <CategoryLink
        to={
          `${data.id}` ||
          `${path[0]}/${data.id}` ||
          `${path[1]}/${path[0]}/${data.id}`
        }
        image={data.image_url}
        state={{ from: data.category_name, fromId: data.id }}
      >
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
