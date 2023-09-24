import { useParams } from "react-router-dom";

const ItemsPage = () => {
  const { id } = useParams();

  return (
    <>
      <p>{id}</p>
      <p>Page of the category</p>
    </>
  );
};

export default ItemsPage;
