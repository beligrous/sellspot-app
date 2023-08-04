import PropTypes from "prop-types";

const CategoryCard = ({ data }) => {
  return (
    <div>
      <p>{data.category_name}</p>
      <div>
        <p>{data.child_count} категорії</p>
      </div>
    </div>
  );
};

export default CategoryCard;

CategoryCard.propTypes = {
  data: PropTypes.shape({
    category_name: PropTypes.string,
    child_count: PropTypes.number,
  }),
};
