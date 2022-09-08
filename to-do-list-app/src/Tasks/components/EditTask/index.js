import Button from "@mui/material/Button";

import useInputs from "@/hooks/task-inputs";
import Grid from "@mui/material/Grid";
import { tasksActions } from "@/store/tasks-slice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import TextField from "@mui/joy/TextField";

const EditTask = (props) => {
  const dispatch = useDispatch();
  const [disabled, setDiabled] = useState(true);
  const {
    value,
    inputIsValid,
    inputIsInvalid,
    valueChangeHandler,
    blurInputHandler,
    resetHandler,
    valueUpdateHandler,
  } = useInputs((value) => value.trim().length > 5);

  useEffect(() => {
    valueUpdateHandler(props.taskId.name);
  }, []);

  useEffect(() => {
    value === props.taskId.name ? setDiabled(true) : setDiabled(false);
  }, [props.taskId.name, value]);

  const updateTaskData = async () => {
    const response = await fetch(
      "http://localhost:3500/tasks/" + props.taskId.id,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: value }),
      }
    );
    if (!response.ok) {
      throw new Error("sending data failed ");
    }
    const responseData = await response.json();
    dispatch(tasksActions.updateTask(responseData));
  };

  const onUpdateTaskHandler = (event) => {
    event.preventDefault();

    if (inputIsInvalid) {
      return;
    }
    updateTaskData();
    props.onClose();
    resetHandler();
  };

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <Backdrop
      // closeModal={props.onClose}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "lightgray",
      }}
      open={true}
      onClick={handleClose}
    >
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F0F0F0",
        }}
        container
        spacing={2}
        height="150px"
        width={"50%"}
      >
        <Grid item sm={8}>
          <TextField
            label="Update your task:"
            value={value}
            // isValid={`${inputIsValid ? "valid" : "invalid"}`}
            placeholder="Enter your Tasks Here!"
            onChange={valueChangeHandler}
            onBlur={blurInputHandler}
          />
        </Grid>
        <Grid
          item
          sm={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            mt: 3,
          }}
        >
          <Button
            variant="contained"
            disabled={disabled}
            onClick={onUpdateTaskHandler}
            // onClick={onAddTaskHandler}
          >
            UPDATE
          </Button>
          <Button
            variant="contained"
            // onClick={onAddTaskHandler}
            onClick={props.onClose}
          >
            CLOSE
          </Button>
        </Grid>
      </Grid>
    </Backdrop>
  );
};

export default EditTask;
//< Modal closeModal={props.onClose}>
//       <Card>
//         <div className={classes.buttonflex}>
//           <div className={classes.itemflex}>
//             <label> Update Task</label>
//             <InputField
//               value={value}
//               isValid={`${inputIsValid ? "valid" : "invalid"}`}
//               placeholder="Enter your Tasks Here!"
//               onChange={valueChangeHandler}
//               onBlur={blurInputHandler}
//             />
//           </div>
//           <Button
//             size="smbutton"
//             color="blue"
//             name="Save"
//             disabled={disabled}
//             onClick={onUpdateTaskHandler}
//           />
//           <Button
//             size="smbutton"
//             color="blue"
//             name="Close"
//             onClick={props.onClose}
//           />
//         </div>
//       </Card>
//     </Modal>
