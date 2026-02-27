import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import styles from "./Header.module.scss";

const MOBILE_BREAKPOINT = 1540;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileLayout, setIsMobileLayout] = useState(
    window.innerWidth <= MOBILE_BREAKPOINT
  );

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobileLayout(mobile);

      if (!mobile) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const isLockScroll = isMobileLayout && isMobileMenuOpen;

    if (!isLockScroll) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileLayout, isMobileMenuOpen]);

  const handleMenuToggle = () => {
    if (!isMobileLayout) {
      return;
    }

    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavLinkClick = () => {
    if (isMobileLayout) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.contacts}></div>

      <Link to="/" className={styles.logoLink}>
        <div className={styles.logo} id="LogoName">
          <img src={Logo} alt="IsadoraLogo" />
        </div>
      </Link>

      <div className={styles.navigation}>
        <div className={styles.hamburgerWrap}>
          <input
            id="toggle"
            type="checkbox"
            checked={isMobileMenuOpen}
            onChange={handleMenuToggle}
            className={styles.toggle}
          />

          <label htmlFor="toggle" className={styles.hamburger}>
            <div className={styles.topBun}></div>
            <div className={styles.meat}></div>
            <div className={styles.bottomBun}></div>
          </label>
        </div>

        <div
          className={`${styles.nav} ${
            isMobileLayout
              ? isMobileMenuOpen
                ? styles.navOpen
                : styles.navClosed
              : styles.navDesktop
          }`}
        >
          <div className={styles.navWrapper}>
            <nav className={styles.navList}>
              <a
                href="#Store"
                onClick={handleNavLinkClick}
                className={styles.navLink}
              >
                <li>Товары</li>
              </a>
              <Link
                to="/Contact"
                onClick={handleNavLinkClick}
                className={styles.navLink}
              >
                <li>Доставка</li>
              </Link>
              <Link
                to="/Contact"
                onClick={handleNavLinkClick}
                className={styles.navLink}
              >
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
