import { Container, Logo, HeadList } from "./footer-styled";

const Footer = () => {
  return (
    <Container>
      <Logo>SellSpot</Logo>
      <HeadList>
        <li>Каталог</li>
        <li>Доставка</li>
        <li>Умови використання сайту</li>
        <li>Про нас</li>
        <li>
          <a>nashaposhta@gmail.com</a>
        </li>
      </HeadList>
    </Container>
  );
};

export default Footer;
