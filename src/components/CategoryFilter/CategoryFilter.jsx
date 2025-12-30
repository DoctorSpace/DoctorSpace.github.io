import { useState, useEffect } from "react";
import Arrow from "../../images/Arrow.svg";
import "./CategoryFilter.css";

const translations = {
  Колье: "necklace",
  "Браслет жесткий": "bracelet_hard",
  "Браслет мягкий": "bracelet_soft",
  "Браслет фетровый": "bracelet_fetrowy",
  Диадема: "diadem",
  Платок: "plate",
  Пояс: "belt",
  Серьги: "earrings",
  "Украшение на волосы": "hair_accessory",
  Чокер: "choker",
};

const categories = {
  "Изделия для головы": ["Диадема", "Украшение на волосы"],
  "Украшения для тела": ["Колье", "Серьги", "Пояс", "Платок", "Чокер"],
  Браслеты: ["Браслет мягкий", "Браслет жесткий", "Браслет фетровый"],
};

export const CategoryFilter = ({ onFilter }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) =>
      checked
        ? [...prev, translations[value]]
        : prev.filter((cat) => cat !== translations[value])
    );
  };

  useEffect(() => {
    const photoData = JSON.parse(localStorage.getItem("photoData")) || [];
    const filteredData = selectedCategories.length
      ? photoData.filter((item) => selectedCategories.includes(item.category))
      : photoData;
    onFilter(filteredData);
  }, [selectedCategories, onFilter]);

  return (
    <div className="category-filter">
      {Object.entries(categories).map(([group, items]) => (
        <div key={group} className="category-group">
          <p className="category-title">{group}</p>
          {items.map((category) => (
            <label key={category} className="checkbox-label">
              <img src={Arrow} alt="ok"/>
              <input
                type="checkbox"
                id={translations[category]}
                value={category}
                onChange={handleCategoryChange}
                className="custom-checkbox"
              />
              {category}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};
