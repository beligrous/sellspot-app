import { useState } from "react";
import { usePath } from "../../service/store";
import {
  Container,
  Logo,
  HeadList,
  SaleButton,
  MenuItem,
} from "./header-styled";
import CategoryCatalogue from "../CategoryCataloque/categoryCatalogue";

const Header = () => {
  const [apear, setApear] = useState(false);
  const initPath = usePath((state) => state.initPath);

  const handleCatalogue = () => {
    setApear(!apear);
  };

  return (
    <>
      <Container onClick={initPath()}>
        <Logo to={"/"}>SellSpot</Logo>
        <HeadList>
          <li>
            <MenuItem onClick={handleCatalogue}>Каталог</MenuItem>
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
