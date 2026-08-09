import { Link } from "react-router-dom";
import type { Product } from "../../../constants/products";
import styles from "./ViewImg.module.scss";

interface ViewImgProps {
  closeView: () => void;
  data: Product | null;
}

const ViewImg = ({ closeView, data }: ViewImgProps) => {
  if (!data) return null;

  return (
    <div className={`${styles.overlay} ${styles.active}`} onClick={closeView}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div id="dropFile" className={styles.imageBox}>
          <img src={data.image} alt={data.name} />
        </div>

        <button className={styles.closeButton} onClick={closeView}>
          ←
        </button>

        <p>{data.name}</p>

        <Link to="/Contact" className={styles.actionButton}>
          Связаться
        </Link>
      </div>
    </div>
  );
};

export default ViewImg;
