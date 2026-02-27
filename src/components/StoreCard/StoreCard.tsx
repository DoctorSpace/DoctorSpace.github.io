import { memo } from "react";
import { Product } from "../../constants/products";
import styles from "./StoreCard.module.scss";

interface StoreCardProps {
  posts: Product[];
  openView: (post: Product) => void;
}

const StoreCard = memo(({ posts, openView }: StoreCardProps) => {
  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <div
          className={styles.card}
          key={post?.id}
          onClick={() => openView(post)}
        >
          <img src={post?.image} alt={post?.name} loading="lazy" />

          <p>{post?.name}</p>
        </div>
      ))}
    </div>
  );
});

export default StoreCard;
