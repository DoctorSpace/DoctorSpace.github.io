import { Link } from "react-router-dom";
import Arrow from "../../images/Arrow.svg";
import Logo from "../../images/Logo.png";
import styles from "./HeaderZero.module.scss";

const HeaderZero = () => {
  return (
    <header className={styles.header}>
      <div className={styles.backLink}>
        <Link to="/">
          <img src={Arrow} alt="Arrow" />
        </Link>
      </div>
      <Link to="/" className={styles.logoLink}>
        <div className={styles.logo} id="LogoName">
          <img src={Logo} alt="Logo" />
        </div>
      </Link>
    </header>
  );
};

export default HeaderZero;
