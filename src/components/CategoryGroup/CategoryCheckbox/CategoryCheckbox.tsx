import styles from "./CategoryCheckbox.module.scss";

export interface CategoryCheckboxProps {
  id: string;
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CategoryCheckbox = ({ id, value, label, onChange }: CategoryCheckboxProps) => (
  <div className={styles.row}>
    <input
      type="checkbox"
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className={styles.checkbox}
    />
    <label htmlFor={id} className={styles.label}>{label}</label>
  </div>
);
