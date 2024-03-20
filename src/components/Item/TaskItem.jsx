import React from "react";
import classes from "./TaskItem.module.css";
import { MdCreate } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function TaskItem({ content, taskId, deleteTask }) {
  return (
    <div className={classes.taskItem}>
      <p>{content}</p>
      <div style={{ marginLeft: "10px" }}>
        <MdCreate className={classes.editIcon}></MdCreate>
        <MdDelete
          className={classes.deleteIcon}
          onClick={() => deleteTask(taskId)}
        ></MdDelete>
      </div>
    </div>
  );
}
