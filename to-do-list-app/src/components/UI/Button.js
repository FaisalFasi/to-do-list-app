import classes from "./Button.module.css";
const Button = ({
  type,
  value,
  name,
  onSubmit,
  onClick,
  size,
  color,
  disabled,
}) => {
  return (
    <button
      className={`${classes[size]} ${classes[color]}`}
      type={type}
      value={value}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default Button;
