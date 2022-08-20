import Button from "./Button";
import InputField from "./InputField";
import classes from "./SearchBar.module.css";
const SearchBar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inputflex}>
        <InputField placeholder="search by name" />
      </div>
      <div>
        <Button name="Sort" size="smbutton" color="blue" />
      </div>
    </div>
  );
};
export default SearchBar;
