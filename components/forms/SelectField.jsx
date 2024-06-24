import { useField } from "formik";

const SelectField = ({ label, name, options, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <div className="form-group">
      <label>{label}</label>
      <select name={name} className="form-control" {...field} {...props}>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {meta.touched && meta.error ? (
        <small className="text-danger">{meta.error}</small>
      ) : null}
    </div>
  );
};

export default SelectField;
