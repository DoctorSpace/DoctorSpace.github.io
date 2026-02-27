import { CategoryCheckbox } from "./CategoryCheckbox/CategoryCheckbox";
import { CATEGORIES } from "./constants";
import styles from "./CategoryGroup.module.scss";

interface CategoryGroupProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CategoryGroup = ({ onChange }: CategoryGroupProps) => {
  return (
    <>
      {CATEGORIES.map((category) => (
        <div key={category.title} className={styles.group}>
          <p className={styles.title}>{category.title}</p>

          {category.items.map((item) => (
            <CategoryCheckbox key={item.id} {...item} onChange={onChange} />
          ))}

          <br />
        </div>
      ))}
    </>
  );
};

export default CategoryGroup;
