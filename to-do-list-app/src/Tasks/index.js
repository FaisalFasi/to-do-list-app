import { useEffect, useState } from "react";
import SearchBar from "@UI/SearchBar";
import Task from "./components/ViewTask";
import AddTask from "./components/AddTask";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { tasksActions } from "@/store/tasks-slice";
import ErrorBoundary from "@/error/ErrorBoundry";
import EditTask from "./components/EditTask";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Container } from "@mui/material";

const TodoIndux = (props) => {
  const inputTask = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [isEditForm, setIsEditForm] = useState(false);
  const [updateTaskId, setUpdateTaskId] = useState(null);
  const [query, setQuery] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  useEffect(() => {
    if (inputTask) {
      setAllTasks(inputTask);
    }
  }, [inputTask]);
  useEffect(() => {
    console.log("UseEffect");
  }, []);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3500/tasks");
        if (!response.ok) {
          throw new Error("sending data failed ");
        }
        const responseData = await response.json();

        dispatch(tasksActions.fetchTask(responseData));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [dispatch]);

  const onCloseModel = () => {
    setIsEditForm(false);
  };

  const onDeleteHandler = (id) => {
    dispatch(tasksActions.removeTask(id));
    const deleteData = async () => {
      try {
        const response = await fetch("http://localhost:3500/tasks/" + id, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("sending data failed ");
        }
      } catch (error) {
        console.log(error);
      }
    };
    deleteData();
  };

  const updateTaskID = (task) => {
    setUpdateTaskId(task);
    setIsEditForm(!isEditForm);
    console.log("task ", task);
  };
  const setQueryHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      const filter = inputTask.filter((obj) =>
        obj.name.toLowerCase().includes(query)
      );
      if (filter.length < 1) {
      }

      setAllTasks(filter);
    }, 500);
    return () => clearTimeout(timer);
  }, [query, inputTask]);

  const sortingClickHandler = (e) => {
    if (e.target.value === "") {
      setAllTasks(inputTask);
    }
    if (e.target.value === "ABC") {
      const sortingTasks = []
        .concat(inputTask)
        .sort((a, b) => (a.name > b.name ? 1 : -1));

      setAllTasks(sortingTasks);
    }
    if (e.target.value === "ZYX") {
      const sortingTasks = []
        .concat(inputTask)
        .sort((a, b) => (b.name > a.name ? 1 : -1));

      setAllTasks(sortingTasks);
    }
    if (e.target.value === "ID") {
      const sortingTasks = []
        .concat(inputTask)
        .sort((a, b) => (a.id > b.id ? 1 : -1));

      setAllTasks(sortingTasks);
    }
  };

  return (
    <ErrorBoundary>
      <Container maxWidth="md">
        <Card>
          <CardContent>
            <AddTask />
            <SearchBar
              sortingHandler={sortingClickHandler}
              onChangeQuery={setQueryHandler}
            />

            {allTasks &&
              allTasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  onDelete={onDeleteHandler}
                  onUpdate={updateTaskID}
                />
              ))}
            {allTasks.length < 1 && (
              <Card>
                <div>No Data Found</div>
              </Card>
            )}
            {isEditForm && (
              <EditTask onClose={onCloseModel} taskId={updateTaskId} />
            )}
          </CardContent>
        </Card>
      </Container>
    </ErrorBoundary>
  );
};
export default TodoIndux;
