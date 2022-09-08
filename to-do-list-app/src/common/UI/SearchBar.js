// import InputField from "./InputField";
// import classes from "./SearchBar.module.css";
// import Card from "./Card";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

// import DropDown from "./DropDown";
// import SelectInput from "@mui/material/Select/SelectInput";
const SearchBar = (props) => {
  // const [age, setAge] = useState("");
  // const options = [
  //   { label: "Not Sorted", value: "" },
  //   { label: "Sort by ABC", value: "ABC" },
  //   { label: "Sort by ZYX ", value: "ZYX" },
  //   { label: "Sort by ID", value: "ID" },
  // ];
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  //   console.log(event.target.value);
  // };

  return (
    <Grid
      container
      sx={{ backgroundColor: "#F1F1F1" }}
      alignItems="center"
      borderRadius={1}
      display="flex"
      flexDirection={"row-reverse"}
      margin="auto"
      // justifyContent="center"
    >
      <FormControl variant="outlined" size="small" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Sort</InputLabel>
        <Select
          // labelId="demo-simple-select-standard-label"
          // id="demo-simple-select-standard"
          value={props.value}
          onChange={props.sortingHandler}
          label="Sort"
        >
          <MenuItem value={""}> Not Sorted</MenuItem>
          <MenuItem value={"ABC"}>Sort by ABC</MenuItem>
          <MenuItem value={"ZYX"}>Sort by ZYX </MenuItem>
          <MenuItem value={"ID"}>Sort by ID </MenuItem>
        </Select>
      </FormControl>
      {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      <TextField
        id="outlined-basic"
        size="small"
        label="Search"
        variant="outlined"
      />
    </Grid>
  );
};
export default SearchBar;
// {/* <Card>
// <div className={classes.container}>
//   <div className={classes.inputflex}>
//     <InputField
//       onChange={props.onChangeQuery}
//       placeholder="search by name"
//     />
//   </div>
//   {/* <div> */}
//   <DropDown
//     options={options}
//     value={options.value}
//     onChange={props.sortingHandler}
//   />
//   {/* </div> */}
// </div>
// </Card> */}
