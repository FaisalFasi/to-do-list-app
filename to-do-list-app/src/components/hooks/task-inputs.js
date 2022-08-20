import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};
const inputReducerFunc = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return inputReducerFunc;
};

const useInputs = (validationCheck) => {
  const [inputState, dispatch] = useReducer(inputReducerFunc, initialState);

  const inputIsValid = validationCheck(inputState.value);
  const inputIsInvalid = !inputIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };
  const blurInputHandler = () => {
    dispatch({ type: "BLUR" });
    console.log("blur" + initialState.isTouched);
  };
  const resetHandler = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    inputIsValid,
    inputIsInvalid,
    valueChangeHandler,
    blurInputHandler,
    resetHandler,
  };
};
export default useInputs;
