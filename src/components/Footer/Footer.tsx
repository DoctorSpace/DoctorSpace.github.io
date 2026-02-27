import Phone from "../../images/Phone.svg";
import PhotoCamera from "../../images/PhotoCamera.svg";
import FooterLogo from "../../images/FooterLogo.png";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <a href="#LogoName">
          <img src={FooterLogo} alt="FooterLogo" />
        </a>
      </div>
      <div className={styles.contact}>
        <div className={styles.messengers}>
          <a target="_blank" rel="noreferrer" href="https://wa.me/79614041462">
            <img
              src={Phone}
              className={styles.icon}
              alt="Phone"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/isadora_visage/"
          >
            <img
              src={PhotoCamera}
              className={styles.icon}
              alt="Photos"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
