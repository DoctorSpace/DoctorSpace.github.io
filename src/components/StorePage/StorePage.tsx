import { useState } from "react";
import ViewImg from "../UI/ViewImg/ViewImg";
import StoreCard from "../StoreCard/StoreCard";
import CategoryGroup from "../CategoryGroup/CategoryGroup";
import { PRODUCTS_ITEMS, type Product } from "../../constants/products";
import { shuffleArray } from "../../utils/shuffleArray";
import styles from "./StorePage.module.scss";

const StorePage = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [infoPostView, setInfoPostView] = useState<Product | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [allPosts] = useState(() => shuffleArray(PRODUCTS_ITEMS));
  const [limit, setLimit] = useState(20);

  const filteredPosts = categories.length
    ? allPosts.filter((post) => categories.includes(post.category))
    : allPosts;
  const visiblePosts = filteredPosts.slice(0, limit);

  const toggleFilter = () => setOpenFilter((prev) => !prev);
  const closeView = () => setInfoPostView(null);
  const loadMore = () => setLimit((prev) => prev + 20);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setCategories((prev) =>
      checked ? [...prev, value] : prev.filter((c) => c !== value)
    );
  };

  return (
    <div className={styles.section}>
      <h2 id="Store">Товары</h2>

      <div className={styles.filter}>
        <button
          type="button"
          onClick={toggleFilter}
          className={styles.filterButton}
        >
          {openFilter ? "закрыть" : "Категории"}
        </button>
      </div>

      <div
        className={openFilter ? styles.container : styles.containerCompact}
      >
        <div className={openFilter ? undefined : styles.categoriesHidden}>
          <CategoryGroup onChange={handleCategoryChange} />
        </div>

        {visiblePosts.length ? (
          <StoreCard openView={setInfoPostView} posts={visiblePosts} />
        ) : (
          <div>Товары отсутствуют</div>
        )}
      </div>

      <ViewImg closeView={closeView} data={infoPostView} />

      {visiblePosts.length < filteredPosts.length && (
        <div className={styles.actions}>
          <button className={styles.loadButton} onClick={loadMore}>
            Загрузить ещё
          </button>
        </div>
      )}
    </div>
  );
};

export default StorePage;
