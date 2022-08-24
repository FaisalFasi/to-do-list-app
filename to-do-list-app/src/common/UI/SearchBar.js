import InputField from "./InputField";
import classes from "./SearchBar.module.css";
import Card from "./Card";

import DropDown from "./DropDown";
const SearchBar = (props) => {
  const options = [
    { label: "Not Sorted", value: "" },
    { label: "Sort by ABC", value: "ABC" },
    { label: "Sort by ZYX ", value: "ZYX" },
    { label: "Sort by ID", value: "ID" },
  ];

  return (
    <Card>
      <div className={classes.container}>
        <div className={classes.inputflex}>
          <InputField
            onChange={props.onChangeQuery}
            placeholder="search by name"
          />
        </div>
        {/* <div> */}
        <DropDown
          options={options}
          value={options.value}
          onChange={props.sortingHandler}
        />
        {/* </div> */}
      </div>
    </Card>
  );
};
export default SearchBar;
