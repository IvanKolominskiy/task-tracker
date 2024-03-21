import React from "react";
import classes from "./TaskItem.module.css";
import { MdCreate } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function TaskItem({
  content,
  deleteTask,
  editTask,
  onDragStart,
}) {
  return (
    <div
      className={classes.taskItem}
      draggable="true"
      onDragStart={(e) => onDragStart(e)}
    >
      <p>{content}</p>
      <div style={{ marginLeft: "10px" }}>
        <MdCreate className={classes.editIcon} onClick={editTask}></MdCreate>
        <MdDelete
          className={classes.deleteIcon}
          onClick={deleteTask}
        ></MdDelete>
      </div>
    </div>
  );
}
