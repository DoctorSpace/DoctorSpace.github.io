import styles from "./CategoryCheckbox.module.scss";

export interface CategoryCheckboxProps {
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CategoryCheckbox = ({ value, label, onChange }: CategoryCheckboxProps) => (
  <div className={styles.row}>
    <input
      type="checkbox"
      id={value}
      name={value}
      value={value}
      onChange={onChange}
      className={styles.checkbox}
    />
    <label htmlFor={value} className={styles.label}>{label}</label>
  </div>
);
