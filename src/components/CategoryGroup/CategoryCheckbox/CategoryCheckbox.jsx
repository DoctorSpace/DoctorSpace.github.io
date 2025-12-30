export const CategoryCheckbox = ({ id, value, label, onChange }) => (
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
