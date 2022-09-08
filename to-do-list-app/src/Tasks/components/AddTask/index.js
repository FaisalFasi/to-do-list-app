import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";

import { useDispatch } from "react-redux";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/material/Typography";

// import SearchBar from "@UI/SearchBar";
// import classes from "./index.module.css";
import useInputs from "@/hooks/task-inputs";
// import Button from "@UI/Button";
// import InputField from "@UI/InputField";

import { tasksActions } from "@/store/tasks-slice";
import { useEffect, useState } from "react";
// import { height, maxWidth } from "@mui/system";

const AddTask = (props) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const {
    value: enteredTaskName,
    inputIsValid: enteredTaskIsValid,
    inputIsInvalid: enteredTaskIsInvalid,
    valueChangeHandler: enteredTaskChangedHandler,
    blurInputHandler: enteredTaskBlurHandler,
    resetHandler: enteredTaskReset,
  } = useInputs((value) => value.trim().length > 5);

  useEffect(() => {
    console.log(enteredTaskIsValid);
    if (enteredTaskIsValid) {
      setError(false);
    }
  }, [enteredTaskIsValid]);

  const postData = async () => {
    try {
      const response = await fetch("http://localhost:3500/tasks", {
        method: "POST",
        body: JSON.stringify({ name: enteredTaskName, id: new Date().now }),
        headers: { "Content-type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("sending data failed ");
      }
      const data = await response.json();
      dispatch(tasksActions.addTask(data));
    } catch (error) {
      console.log(error);
    }
  };
  const onAddTaskHandler = (event) => {
    event.preventDefault();

    if (enteredTaskIsInvalid || enteredTaskName.trim().length < 1) {
      setError(true);
      return;
    }
    postData();
    enteredTaskReset();
    setError(false);
  };
  return (
    <Grid>
      <Typography variant="h5">TODO APP</Typography>
      <Grid sx={{ mt: 1 }} container spacing={2} alignItems="end">
        <Grid item xs={7} sm={8} md={9} lg={9} xl={10}>
          <TextField
            label="Enter your task here:"
            value={enteredTaskName}
            // isValid={`${!enteredTaskIsInvalid ? "valid" : "invalid"}`}
            onChange={enteredTaskChangedHandler}
            onBlur={enteredTaskBlurHandler}
          />
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={3} xl={2} sx={{ pl: "16px" }}>
          <Button
            sx={{ width: "100%" }}
            // fullWidth="100%"
            variant="contained"
            onClick={onAddTaskHandler}
            size="large"
          >
            Add
          </Button>
        </Grid>
        <Grid item xs={4}>
          {error && <p>form is invalid</p>}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddTask;
// {
/* <Card
sx={{
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignContent: "flex-start",
  // gap: 0.5,
  width: "50%",
  margin: "auto",
  bgcolor: "background.paper",
}}
>
<Box
  sx={{
    display: "flex",
    flexDirection: "coloumn",
    width: "50%",
    margin: "10px auto",
    bgcolor: "background.paper",
  }}
>
  <TextField
    sx={{
      height: "",
      // width: "100%",
      // bgcolor: "background.paper",
    }}
    id="outlined-basic"
    label="Enter your Tasks Here!"
    variant="outlined"
    value={enteredTaskName}
    isValid={`${!enteredTaskIsInvalid ? "valid" : "invalid"}`}
    onChange={enteredTaskChangedHandler}
    onBlur={enteredTaskBlurHandler}
  />
  {error && <p>form is invalid</p>}
</Box>
<Button variant="contained" onClick={onAddTaskHandler} size="large">
  Add
</Button>
</Card> */
// }
