import HeaderZero from "../HeaderZero/HeaderZero";
import HorizontalRule from "../UI/HorizontalRule/HorizontalRule";
import Phone from "../../images/Phone.svg";
import PhotoCamera from "../../images/PhotoCamera.svg";
import styles from "./ContactPage.module.scss";

const ContactPage = () => {
  return (
    <div>
      <HeaderZero />
      <HorizontalRule />
      <div className={styles.section}>
        <div className={styles.card}>
          <h2>Контакты</h2>
          <div className={styles.text}>
            <p>
              Не стесняйтесь звонить нам, если у вас есть какие-либо вопросы,
              нужна консультация или вы хотели бы узнать больше о наших товарах
              и услугах в области восточных танцев.
            </p>
            <p>Мы ценим вашу заинтересованность и ждем вашего сообщения</p>
          </div>

          <div className={styles.write}>
            <p>Напиши нам</p>
            <div itemScope className={styles.messengers}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://wa.me/79614041462"
              >
                <img
                  itemProp="image"
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
                  itemProp="image"
                  src={PhotoCamera}
                  className={styles.icon}
                  alt="Photos"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
