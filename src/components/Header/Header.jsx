import { useState } from "react";
import { Container, Logo, HeadList, SaleButton } from "./header-styled";
import CategoryCatalogue from "../CategoryCataloque/categoryCatalogue";

const Header = () => {
  const [apear, setApear] = useState(false);

  const handleCatalogue = () => {
    setApear(!apear);
  };

  return (
    <>
      <Container>
        <Logo>SellSpot</Logo>
        <HeadList>
          <li>
            <p onClick={handleCatalogue}>Каталог</p>
          </li>
          <li>Про нас</li>
          <li>Контакти</li>
          <li>Умови використання сайту</li>
        </HeadList>
        <SaleButton to={"/product"}>Продати</SaleButton>
      </Container>
      {apear && <CategoryCatalogue />}
    </>
  );
};

export default Header;
