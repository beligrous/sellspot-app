import { Button } from "../Filter/filter-styled";
import { Container, Logo, HeadList } from "./header-styled";

const Header = () => {
  return (
    <Container>
      <Logo>SellSpot</Logo>
      <HeadList>
        <li>Каталог</li>
        <li>Про нас</li>
        <li>Контакти</li>
        <li>Умови використання сайту</li>
      </HeadList>
      <Button>Продати</Button>
    </Container>
  );
};

export default Header;
