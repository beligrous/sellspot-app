import { Container, Logo, HeadList, SaleButton } from "./header-styled";

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
      <SaleButton to={"/product"}>Продати</SaleButton>
    </Container>
  );
};

export default Header;
