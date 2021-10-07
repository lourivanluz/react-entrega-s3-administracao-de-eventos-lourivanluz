import { ContainerIcon, HeaderStyled, UlStyled } from "./style";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import logo from "../../../assets/img/Logo.png";
import { useState } from "react";
import { useHistory } from "react-router";

export const Header = () => {
  const [showList, setShowList] = useState(false);

  const history = useHistory();

  const handleSwitchPage = (path) => {
    history.push(path);
  };

  return (
    <HeaderStyled>
      <div className="logoContainer">
        <figure className="imgContainer">
          <img src={logo} alt="/" />
        </figure>
        <h1>
          To<span>.</span>Drink
        </h1>
      </div>
      <nav className="Container-nav">
        <ContainerIcon show={showList}>
          {!showList && <GiHamburgerMenu onClick={() => setShowList(true)} />}
          {showList && (
            <AiOutlineCloseCircle onClick={() => setShowList(false)} />
          )}
        </ContainerIcon>

        <UlStyled className="listNav" show={showList}>
          <li onClick={() => handleSwitchPage("/")}>Produtos</li>
          <li onClick={() => handleSwitchPage("/casamento")}>Casamento</li>
          <li onClick={() => handleSwitchPage("/formatura")}>Formatura</li>
          <li onClick={() => handleSwitchPage("/confraternizacao")}>
            Confraternização
          </li>
        </UlStyled>
      </nav>
    </HeaderStyled>
  );
};
