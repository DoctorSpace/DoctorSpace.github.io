import { Link } from "react-router-dom";
import { Product } from "../../../constants/products";
import styles from "./ViewImg.module.scss";

interface ViewImgProps {
  visible: boolean;
  closeView: () => void;
  data: Product | null;
}

const ViewImg = ({ visible, closeView, data }: ViewImgProps) => {
  if (!data) return null;

  const rootClasses = [styles.overlay];

  if (visible) {
    rootClasses.push(styles.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={closeView}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div id="dropFile" className={styles.imageBox}>
          <img src={data?.image} alt="something" />
        </div>

        <button className={styles.closeButton} onClick={closeView}>
          ←
        </button>

        <p>{data?.name}</p>

        <Link to="/Contact" className={styles.actionButton}>
          Связаться
        </Link>
      </div>
    </div>
  );
};

export default ViewImg;
