import Button from "./Button";
import Card from "./Card";
import InputField from "./InputField";
import classes from "./EditTask.module.css";
import Modal from "./Modal";
const EditTask = (props) => {
  return (
    <Modal closeModal={props.onClose}>
      <Card>
        <div className={classes.buttonflex}>
          <div className={classes.itemflex}>
            <label> Update Task</label>
            <InputField />
          </div>
          <Button
            size="smbutton"
            color="blue"
            name="Save"
            onClick={props.onClose}
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
