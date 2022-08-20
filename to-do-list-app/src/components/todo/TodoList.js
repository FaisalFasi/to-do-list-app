// import SearchBar from "../UI/SearchBar";
import AddTask from "../UI/AddTask";
import InputForm from "./InputForm";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { inputActions } from "../../store/input-slice";
import ErrorBoundary from "../error/ErrorBoundry";
import { useEffect, useState } from "react";
const TodoList = (props) => {
  const inputTask = useSelector((state) => state.input.tasks);
  const dispatch = useDispatch();
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const postData = async () => {
      try {
        const response = await fetch("http://localhost:3500/tasks");
        if (!response.ok) {
          throw new Error("sending data failed ");
        }
        const data = await response.json();

        dispatch(inputActions.addTask(data));
      } catch (error) {
        console.log(error);
      }
    };
    postData();
  }, [dispatch, submit]);
  console.log("input task ", inputTask);

  const onDeleteHandler = (id) => {
    dispatch(inputActions.removeTask(id));

    const deleteData = async () => {
      try {
        const response = await fetch("http://localhost:3500/tasks/" + id, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("sending data failed ");
        }
        // const data = await response.json();

        // dispatch(inputActions.addTask(data));
      } catch (error) {
        console.log(error);
      }
    };
    deleteData();
    // console.log("ID: ", deleteTask);
  };

  return (
    <>
      <ErrorBoundary>
        <InputForm setSubmit={() => setSubmit(!submit)} />
        {inputTask.map((task) => (
          <AddTask key={task.id} task={task} onDelete={onDeleteHandler} />
        ))}
      </ErrorBoundary>
    </>
  );
};
export default TodoList;
