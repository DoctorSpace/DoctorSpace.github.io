import { Link } from "react-router-dom";
import Photo1 from "../../images/Photo1.jpg";
import Photo2 from "../../images/Photo2.jpg";
import styles from "./FirstPage.module.scss";

const FirstPage = () => {
  return (
    <div className={styles.section}>
      <h1>Аксессуары ручной работы</h1>
      <div className={styles.wrapper}>
        <div className={styles.content}>

          <div className={styles.text}>
            <div className={styles.description}>
              <h2>Добро пожаловать в мир восточных танцев и элегантных аксессуаров! Наш магазин - это место, где таинственная красота Востока соединяется с пышными движениями и страстью танца.</h2>
              <h2>Здесь вы найдете множество колье, браслетов, поясов и других украшений ручной работы. Наши изделия помогут сделать Ваш танец восхитительным и элегантным.</h2>
            </div>
          </div>
        </div>

        <div className={styles.images}>
          <img src={Photo1} className={styles.imagePrimary} alt="photo1" />
          <img src={Photo2} className={styles.imageSecondary} alt="photo2" />
        </div>
      </div>

      <div className={styles.actions}>
        <a href="#Store" className={styles.primaryButton}>Посмотреть товары</a>
        <Link to="/Contact" className={styles.secondaryButton}>Связаться</Link>
      </div>
    </div>
  );
};

export default FirstPage;
