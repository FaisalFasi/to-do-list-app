import classes from "./Checkbox.module.css";
const Checkbox = ({ value, onChange, defaultChecked }) => {
  return (
    <input
      className={classes.container}
      type="checkbox"
      value={value}
      onChange={onChange}
      defaultChecked={defaultChecked}
    />
  );
};

export default Checkbox;
