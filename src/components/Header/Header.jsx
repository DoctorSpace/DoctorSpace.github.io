import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";

const Header = () => {
  const [toogle, setToogle] = useState(false);

  const ToogleChange = () => {
    setToogle(!toogle);
  };

  return (
    <header>
      <div className="header__contact-messengers"></div>

      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <div className="header__name" id="LogoName">
          <img src={Logo} alt="IsadoraLogo" />
        </div>
      </Link>

      <div className="header__nav">
        <div className="header__nav-hamburger">
          <input
            id="toggle"
            type="checkbox"
            checked={toogle}
            onChange={(e) => ToogleChange(e)}
          ></input>

          <label for="toggle" className="hamburger">
            <div className="top-bun"></div>
            <div className="meat"></div>
            <div className="bottom-bun"></div>
          </label>
        </div>

        <div className={`${toogle ? "nav" : "hide"}`}>
          <div className="nav-wrapper">
            <nav>
              <a href="#Store" onClick={ToogleChange}>
                <li>Товары</li>
              </a>
              <Link to="/Contact" onClick={ToogleChange}>
                <li>Доставка</li>
              </Link>
              <Link to="/Contact" onClick={ToogleChange}>
                <li>Контакты</li>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
