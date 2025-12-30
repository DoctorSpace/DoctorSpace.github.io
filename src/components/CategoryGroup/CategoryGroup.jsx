import { CategoryCheckbox } from "./CategoryCheckbox/CategoryCheckbox";
import { CATEGORIES } from "./constants";

const CategoryGroup = ({ onChange }) => {
  return (
    <>
      {CATEGORIES.map((category) => (
        <div key={category.title} className="CategoryGroup">
          <p>{category.title}</p>

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
