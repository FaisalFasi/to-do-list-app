import classes from "./InputForm.module.css";
import useInputs from "../hooks/task-inputs";
import Button from "../UI/Button";
import InputField from "../UI/InputField";

// import { inputActions } from "../../store/input-slice";
// import { useDispatch } from "react-redux";
const InputForm = (props) => {
  // const dispatch = useDispatch();

  const {
    value: enteredTask,
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
  const postData = async () => {
    try {
      const response = await fetch("http://localhost:3500/tasks", {
        method: "POST",
        body: JSON.stringify({ task: enteredTask, id: new Date().now }),
        headers: { "Content-type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("sending data failed ");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onAddTaskHandler = (event) => {
    event.preventDefault();

    if (enteredTaskIsInvalid) {
      return;
    }
    postData();
    enteredTaskReset();
    props.setSubmit();
  };
  return (
    <form onSubmit={onAddTaskHandler} className={classes.container}>
      <div className={classes.inputflex}>
        <div className={classes.inputerror}>
          <InputField
            value={enteredTask}
            isValid={`${!enteredTaskIsInvalid ? "valid" : "invalid"}`}
            placeholder="Enter your Tasks Here!"
            onChange={enteredTaskChangedHandler}
            onBlur={enteredTaskBlurHandler}
          />
          <div>form is invalid</div>
          {/* {enteredTaskIsInvalid && <p>form is invalid</p>} */}
        </div>
        <div className={classes.inputflexbtn}>
          <Button name="Add" size="smbutton" color="blue" />
        </div>
      </div>
    </form>
  );
};

export default InputForm;
