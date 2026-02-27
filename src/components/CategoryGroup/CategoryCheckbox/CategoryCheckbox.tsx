export interface CategoryCheckboxProps {
  id: string;
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CategoryCheckbox = ({ id, value, label, onChange }: CategoryCheckboxProps) => (
  <div>
    <input
      type="checkbox"
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className="custom-checkbox"
    />
    <label htmlFor={id}>{label}</label>
  </div>
);
