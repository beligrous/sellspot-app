import { Link } from "react-router-dom";
import { scrollUp } from "../buttons/buttons.jsx";
import { BtnCategory } from "../buttons/buttons";
import { Container, HeadList, Logo } from "./footer-styled";

const Footer = () => {
  return (
    <Container>
      <Link to={'/'} onClick={scrollUp}><Logo>SellSpot</Logo></Link>
      <HeadList>
        <li><BtnCategory bg='var(--Secondary90)'>Каталог</BtnCategory></li>
        <li><BtnCategory bg='var(--Secondary90)'>Доставка</BtnCategory></li>
        <li><BtnCategory bg='var(--Secondary90)'>Умови використання сайту</BtnCategory></li>
        <li><BtnCategory bg='var(--Secondary90)'>Про нас</BtnCategory></li>
        <li>
          <a><BtnCategory bg='var(--Secondary90)'>nashaposhta@gmail.com</BtnCategory></a>
        </li>
      </HeadList>
    </Container>
  );
};

export default Footer;
