// import Button from "./Button";
import Checkbox from "@UI/Checkbox";
import classes from "./index.module.css";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import Card from "@UI/Card";

const Task = (props) => {
  return (
    <Card>
      <div className={classes.container}>
        <div className={classes.checkboxflex}>
          <Checkbox />
          <p>{props.task.name}</p>
        </div>
        <div className={classes.iconsflex}>
          <span>
            <AiFillEdit
              onClick={() => props.onUpdate(props.task)}
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

export default Task;
