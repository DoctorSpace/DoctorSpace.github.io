import Phone from "../../images/Phone.svg";
import PhotoCamera from "../../images/PhotoCamera.svg";
import FooterLogo from "../../images/FooterLogo.png";

const Footer = () => {
  return (
    <footer>
      <div className="Footer__logo">
        <a href="#LogoName">
          <img src={FooterLogo} alt="FooterLogo" />
        </a>
      </div>
      <div className="Footer__contact">
        <div className="Footer__contact-messengers">
          <a target="_blank" rel="noreferrer" href="https://wa.me/79614041462">
            <img
              src={Phone}
              className="Footer__contact-messengers-icon"
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
              className="Footer__contact-messengers-icon"
              alt="photos"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
