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
      <main className={styles.section}>
        <div className={styles.card}>
          <section className={styles.intro}>
            <h1>
              Давайте создадим ваш <span>особенный образ</span>
            </h1>
            <p className={styles.lead}>
              Расскажите о костюме, выступлении или идее. Мы поможем подобрать
              украшение, которое завершит образ.
            </p>
          </section>

          <section itemScope className={styles.contacts}>
            <div className={styles.contactsHeader}>
              <p>Выберите удобный способ</p>
              <h2>Напишите нам</h2>
            </div>

            <a
              itemProp="url"
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/79614041462"
              className={styles.channel}
            >
              <span className={styles.iconBox}>
                <img itemProp="image" src={Phone} alt="WhatsApp" />
              </span>
              <span className={styles.channelText}>
                <strong>WhatsApp</strong>
                <small>Написать сообщение</small>
              </span>
              <span className={styles.channelArrow} aria-hidden="true">
                ↗
              </span>
            </a>

            <a
              itemProp="url"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/isadora_visage/"
              className={styles.channel}
            >
              <span className={styles.iconBox}>
                <img itemProp="image" src={PhotoCamera} alt="Instagram" />
              </span>
              <span className={styles.channelText}>
                <strong>Instagram</strong>
                <small>@isadora_visage</small>
              </span>
              <span className={styles.channelArrow} aria-hidden="true">
                ↗
              </span>
            </a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
