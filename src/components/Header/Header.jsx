import { useState } from "react";
import { usePath } from "../../service/store";
import {
  Container,
  Logo,
  HeadList,
  Nav,
  Head,
} from "./header-styled";
import CategoryCatalogue from "../CategoryCataloque/categoryCatalogue";
import { Btn, TextLink } from "../buttons/buttons";
import { Link } from "react-router-dom";

const Header = () => {
  const [apear, setApear] = useState(false);
  const [language, setLanguage] = useState(0);
  const initPath = usePath(state => state.initPath);

  const handleCatalogue = () => setApear(!apear);

  const languages = ['ua', 'en']
  const changeLang = () => {
    if (!languages[language+1]) setLanguage(0)
    else setLanguage(language+1)
  }

  return (
    <Head>
      <Container onClick={initPath()}>
        <Logo to={"/"}>SellSpot</Logo>
        <HeadList>
          <li>
            <TextLink onClick={handleCatalogue}>Каталог</TextLink>
          </li>
          <li><TextLink>Про нас</TextLink></li>
          <li><TextLink>Контакти</TextLink></li>
          <li><TextLink>Умови використання сайту</TextLink></li>
        </HeadList>
        <Nav>
          <div className="language" onClick={changeLang}>
            <p>{!languages[language+1]? languages[0] : languages[language+1]}</p> {/* якщо наступний елемент undefine, беремо нульовий */}
            <div className="line"></div>
            <div className="item">
              <img src={`../../../icons/languages/${languages[language]}.svg`} alt={`${languages[language]} language`} />
              <p>{languages[language]}</p>
            </div>
          </div>
          <img src="../../../icons/person.svg" alt="accaunt" />
          <img src="../../../icons/heart.svg" alt="my favorit" />
          <img src="../../../icons/search.svg" alt="search" />
          <Link to="/product"><Btn>Продати</Btn></Link>
        </Nav>
      </Container>
      <CategoryCatalogue isVisible={apear} />
    </Head>
  );
};

export default Header;
