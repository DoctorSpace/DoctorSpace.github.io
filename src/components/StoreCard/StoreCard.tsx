import { memo } from "react";
import { Product } from "../../constants/products";

interface StoreCardProps {
  posts: Product[];
  openView: (post: Product) => void;
}

const StoreCard = memo(({ posts, openView }: StoreCardProps) => {
  return (
    <div className="StoreCards">
      {posts.map((post) => (
        <div
          className="StoreCards__item"
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
