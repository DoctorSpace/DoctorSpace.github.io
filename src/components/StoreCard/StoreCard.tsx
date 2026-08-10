import { useState } from "react";
import { ImageLoader } from "generative-loaders";
import type { Product } from "../../constants/products";
import styles from "./StoreCard.module.scss";

interface StoreCardProps {
  posts: Product[];
  openView: (post: Product) => void;
}

const CardImage = ({ image, name }: Pick<Product, "image" | "name">) => {
  const [isLoading, setIsLoading] = useState(true);
  const finishLoading = () => setIsLoading(false);

  return (
    <div className={styles.imageBox}>
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
        loading="lazy"
        className={isLoading ? styles.imageLoading : undefined}
        onLoad={finishLoading}
        onError={finishLoading}
      />
    </div>
  );
};

const StoreCard = ({ posts, openView }: StoreCardProps) => {
  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <div
          className={styles.card}
          key={post.id}
          onClick={() => openView(post)}
        >
          <CardImage image={post.image} name={post.name} />

          <p>{post.name}</p>
        </div>
      ))}
    </div>
  );
};

export default StoreCard;
