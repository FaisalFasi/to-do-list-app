import classes from "@UI/DropDown.module.css";
const DropDown = ({ value, options, onChange }) => {
  return (
    <div className={classes.label}>
      {/* {label} */}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
