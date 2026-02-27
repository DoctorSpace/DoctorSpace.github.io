import { useState, useEffect, useCallback, useMemo } from "react";
import ViewImg from "../UI/ViewImg/ViewImg";
import StoreCard from "../StoreCard/StoreCard";
import CategoryGroup from "../CategoryGroup/CategoryGroup";
import { PRODUCTS_ITEMS } from "../../constants/products";
import { shuffleArray } from "../../utils/shuffleArray";
import { Product } from "../../constants/products";
import styles from "./StorePage.module.scss";

const StorePage = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [infoPostView, setInfoPostView] = useState<Product | null>(null);
  const [isImgPostView, setIsImgPostView] = useState(false);

  const [categories, setCategories] = useState<string[]>([]);
  const [allPosts, setAllPosts] = useState<Product[]>([]);
  const [limit, setLimit] = useState(20);

  const visiblePosts = useMemo(() => {
    const filtered = categories.length
      ? allPosts.filter((post) => categories.includes(post.category))
      : allPosts;
    return filtered.slice(0, limit);
  }, [allPosts, categories, limit]);

  const filteredPosts =
    categories.length > 0
      ? allPosts.filter((post) => categories.includes(post.category))
      : allPosts;

  useEffect(() => {
    const shuffled = shuffleArray(PRODUCTS_ITEMS);
    setAllPosts(shuffled);
  }, []);

  useEffect(() => {}, [filteredPosts, limit]);

  const toggleFilter = () => setOpenFilter((prev) => !prev);

  const openView = useCallback((post: Product) => {
    setInfoPostView(post);
    setIsImgPostView(true);
  }, []);

  const closeView = () => {
    setInfoPostView(null);
    setIsImgPostView(false);
  };

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
        <button type="button" onClick={toggleFilter} className={styles.filterButton}>
          {openFilter ? "закрыть" : "Категории"}
        </button>
      </div>

      <div
        className={openFilter ? styles.container : styles.containerCompact}
      >
        <div
          className={
            openFilter
              ? styles.categories
              : styles.categoriesHidden
          }
        >
          <CategoryGroup onChange={handleCategoryChange} />
        </div>

        {visiblePosts.length ? (
          <StoreCard openView={openView} posts={visiblePosts} />
        ) : (
          <div>Товары отсутствуют</div>
        )}
      </div>

      <ViewImg
        visible={isImgPostView}
        closeView={closeView}
        data={infoPostView}
      />

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
