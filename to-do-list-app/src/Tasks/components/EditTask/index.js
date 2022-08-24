import Button from "@UI/Button";
import Card from "@UI/Card";
import InputField from "@UI/InputField";
import classes from "./index.module.css";
import Modal from "@UI/Modal";
import useInputs from "@/hooks/task-inputs";

import { tasksActions } from "@/store/tasks-slice";
import { useDispatch } from "react-redux";

const EditTask = (props) => {
  const dispatch = useDispatch();

  const {
    value: enteredTaskName,
    inputIsValid: enteredTaskIsValid,
    inputIsInvalid: enteredTaskIsInvalid,
    valueChangeHandler: enteredTaskChangedHandler,
    blurInputHandler: enteredTaskBlurHandler,
    resetHandler: enteredTaskReset,
  } = useInputs((value) => value.trim().length > 5);

  let formIsValid = false;

  if (enteredTaskIsValid) {
    formIsValid = true;
  }
  const updateTaskData = async () => {
    const response = await fetch(
      "http://localhost:3500/tasks/" + props.taskId,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: enteredTaskName }),
      }
    );
    if (!response.ok) {
      throw new Error("sending data failed ");
    }
    const responseData = await response.json();
    console.log(responseData, "data");
    dispatch(tasksActions.updateTask(responseData));
  };

  const onUpdateTaskHandler = (event) => {
    event.preventDefault();

    if (enteredTaskIsInvalid) {
      return;
    }
    updateTaskData();
    props.onClose();
    enteredTaskReset();
  };
  return (
    <Modal closeModal={props.onClose}>
      <Card>
        <div className={classes.buttonflex}>
          <div className={classes.itemflex}>
            <label> Update Task</label>
            <InputField
              value={enteredTaskName}
              isValid={`${!enteredTaskIsInvalid ? "valid" : "invalid"}`}
              placeholder="Enter your Tasks Here!"
              onChange={enteredTaskChangedHandler}
              onBlur={enteredTaskBlurHandler}
            />{" "}
          </div>
          <Button
            size="smbutton"
            color="blue"
            name="Save"
            onClick={onUpdateTaskHandler}
          />
          <Button
            size="smbutton"
            color="blue"
            name="Close"
            onClick={props.onClose}
          />
        </div>
      </Card>
    </Modal>
  );
};

export default EditTask;
