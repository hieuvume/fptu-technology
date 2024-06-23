const { useField } = require("formik");

const InputField = ({
  label,
  placeholder,
  name,
  type,
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder || label}
        className="form-control"
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? (
        <small className="text-danger">
          {meta.error}
        </small>
      ) : null}
    </div>
  );
};

export default InputField;
