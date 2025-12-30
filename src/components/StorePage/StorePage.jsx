import { useState, useEffect } from "react";
import ViewImg from "../UI/ViewImg/ViewImg";
import StoreCard from "../StoreCard/StoreCard";
import CategoryGroup from "../CategoryGroup/CategoryGroup";
import { PRODUCTS_ITEMS } from "../../constants/products";
import { shuffleArray } from "../../utils/shuffleArray";

const StorePage = () => {
  const [openFilter, setOpenFilter] = useState(true);
  const [infoPostView, setInfoPostView] = useState(null);
  const [isImgPostView, setIsImgPostView] = useState(false);

  const [categories, setCategories] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [limit, setLimit] = useState(20);

  const filteredPosts =
    categories.length > 0
      ? allPosts.filter((post) => categories.includes(post.category))
      : allPosts;

  // Инициализация и перемешивание карточек
  useEffect(() => {
    const shuffled = shuffleArray(PRODUCTS_ITEMS);

    setAllPosts(shuffled);
    setVisiblePosts(shuffled.slice(0, limit));
    // eslint-disable-next-line
  }, []);

  // Обновление видимых карточек при изменении лимита или фильтра
  useEffect(() => {
    let filtered = allPosts;

    if (categories.length > 0) {
      filtered = allPosts.filter((post) => categories.includes(post.category));
    }

    setVisiblePosts(filtered.slice(0, limit));
  }, [allPosts, categories, limit]);

  // Проверка на отображение кнопки показать ещё
  useEffect(() => {
    setVisiblePosts(filteredPosts.slice(0, limit));
  }, [filteredPosts, limit]);

  const toggleFilter = () => setOpenFilter((prev) => !prev);

  const openView = (post) => {
    setInfoPostView(post);
    setIsImgPostView(true);
  };
  const closeView = () => {
    setInfoPostView(null);
    setIsImgPostView(false);
  };

  const loadMore = () => setLimit((prev) => prev + 20);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;

    setCategories((prev) =>
      checked ? [...prev, value] : prev.filter((c) => c !== value)
    );
  };

  return (
    <div className="store">
      <h2 id="Store">Товары</h2>

      <div className="store__filter">
        <button type="button" onClick={toggleFilter}>
          {openFilter ? "закрыть" : "Категории"}
        </button>
      </div>

      <div
        className={openFilter ? "store__container" : "store__container-close"}
      >
        <div
          className={
            openFilter
              ? "store__container-categories"
              : "store__container-categories-close"
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
        <div className="store__button">
          <button className="Btn-CardLoad" onClick={loadMore}>
            Загрузить ещё
          </button>
        </div>
      )}
    </div>
  );
};

export default StorePage;
