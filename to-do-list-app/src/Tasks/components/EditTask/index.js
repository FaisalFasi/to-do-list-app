import Button from "@UI/Button";
import Card from "@UI/Card";
import InputField from "@UI/InputField";
import classes from "./index.module.css";
import Modal from "@UI/Modal";
import useInputs from "@/hooks/task-inputs";

import { tasksActions } from "@/store/tasks-slice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

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
    if (value === props.taskId.name) {
      setDiabled(true);
    } else {
      setDiabled(false);
    }
  }, [value, props.taskId.name]);

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
  return (
    <Modal closeModal={props.onClose}>
      <Card>
        <div className={classes.buttonflex}>
          <div className={classes.itemflex}>
            <label> Update Task</label>
            <InputField
              value={value}
              isValid={`${inputIsValid ? "valid" : "invalid"}`}
              placeholder="Enter your Tasks Here!"
              onChange={valueChangeHandler}
              onBlur={blurInputHandler}
            />
          </div>
          <Button
            size="smbutton"
            color="blue"
            name="Save"
            disabled={disabled}
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
