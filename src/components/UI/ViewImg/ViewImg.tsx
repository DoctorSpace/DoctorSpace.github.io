import { useState } from "react";
import { ImageLoader } from "generative-loaders";
import { Link } from "react-router-dom";
import type { Product } from "../../../constants/products";
import styles from "./ViewImg.module.scss";

interface ViewImgProps {
  closeView: () => void;
  data: Product | null;
}

const ModalImage = ({ image, name }: Pick<Product, "image" | "name">) => {
  const [isLoading, setIsLoading] = useState(true);
  const finishLoading = () => setIsLoading(false);

  return (
    <div id="dropFile" className={styles.imageBox}>
      {isLoading && (
        <div className={styles.loader}>
          <ImageLoader
            variant="skeleton"
            size="100%"
            color="#b97858"
            radius={8}
            label="Generating image"
          />
        </div>
      )}
      <img
        src={image}
        alt={name}
        className={isLoading ? styles.imageLoading : undefined}
        onLoad={finishLoading}
        onError={finishLoading}
      />
    </div>
  );
};

const ViewImg = ({ closeView, data }: ViewImgProps) => {
  if (!data) return null;

  return (
    <div className={`${styles.overlay} ${styles.active}`} onClick={closeView}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <ModalImage key={data.id} image={data.image} name={data.name} />

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
