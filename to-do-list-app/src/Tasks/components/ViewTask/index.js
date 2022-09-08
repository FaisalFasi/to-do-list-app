import DeleteIcon from "@mui/icons-material/Delete";

import Checkbox from "@mui/material/Checkbox";
// import classes from "./index.module.css";
// import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
// import Card from "@UI/Card";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
// import BorderColorIcon from "@mui/icons-material/BorderColor";
import EditIcon from "@mui/icons-material/Edit"; // import BorderColorIcon from '@mui/icons-material/BorderColor';
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import {
// AddCircleOutline,
// RemoveCircleOutlineOutlined,
// } from "@material-ui/icons";
// import BorderColorIcon from "@mui/icons-material/BorderColor";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const Task = (props) => {
  return (
    <Grid
      container
      sx={{
        mt: 2,
        display: "flex",
        alignItems: "center",
        // justifyContent: "space-between",
        backgroundColor: "#F0F0F0",
      }}
    >
      <Grid item xm={1} sm={1} md={1} lg={1}>
        <Checkbox defaultChecked />
      </Grid>
      <Grid item xm={7} sm={8} md={8} lg={9}>
        <p>{props.task.name}</p>
      </Grid>
      <Grid
        item
        xm={4}
        sm={3}
        md={3}
        lg={2}
        sx={{ display: "flex", justifyContent: "end", pr: "10px" }}
      >
        <IconButton size="large" onClick={() => props.onUpdate(props.task)}>
          <EditIcon fontSize="large" />
        </IconButton>
        |
        <IconButton size="large" onClick={() => props.onDelete(props.task.id)}>
          <DeleteIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Task;
// {/* <Card>
//       <div className={classes.container}>
//         <div className={classes.checkboxflex}>
//           <Checkbox />
//           <p>{props.task.name}</p>
//         </div>
//         <div className={classes.iconsflex}>
//           <span>
//             <AiFillEdit
//               onClick={() => props.onUpdate(props.task)}
//               className={classes.editstyle}
//               size={20}
//               onMouseOver={({ target }) => (target.style.color = "white")}
//               onMouseOut={({ target }) => (target.style.color = "black")}
//             />
//           </span>
//           |
//           <span>
//             <AiTwotoneDelete
//               onClick={() => props.onDelete(props.task.id)}
//               className={classes.deletestyle}
//               size={20}
//               onMouseOver={({ target }) => (target.style.color = "white")}
//               onMouseOut={({ target }) => (target.style.color = "black")}
//             />
//           </span>
//         </div>
//       </div>
//     </Card> */}
