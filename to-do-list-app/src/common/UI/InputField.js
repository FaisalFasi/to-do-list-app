import classes from "./InputField.module.css";
const InputField = ({
  type,
  value,
  placeholder,
  onChange,
  onBlur,
  label,
  isValid,
}) => {
  return (
    <input
      className={`${classes["input"]} ${classes[isValid]}`}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      label={label}
    ></input>
  );
};

export default InputField;
