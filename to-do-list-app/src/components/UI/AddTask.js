// import Button from "./Button";
import Checkbox from "./Checkbox";
import classes from "./AddTask.module.css";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import Card from "./Card";

const AddTask = (props) => {
  return (
    <Card>
      <div className={classes.container}>
        <div className={classes.checkboxflex}>
          <Checkbox />
          <p>{props.task.task}</p>
        </div>
        <div className={classes.iconsflex}>
          <span>
            <AiFillEdit
              onClick={props.isEditTask}
              className={classes.editstyle}
              size={20}
              onMouseOver={({ target }) => (target.style.color = "white")}
              onMouseOut={({ target }) => (target.style.color = "black")}
            />
          </span>
          |
          <span>
            <AiTwotoneDelete
              onClick={() => props.onDelete(props.task.id)}
              className={classes.deletestyle}
              size={20}
              onMouseOver={({ target }) => (target.style.color = "white")}
              onMouseOut={({ target }) => (target.style.color = "black")}
            />
          </span>
        </div>
      </div>
    </Card>
  );
};

export default AddTask;
