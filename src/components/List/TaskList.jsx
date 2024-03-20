import React from "react";
import TaskItem from "../Item/TaskItem";

export default function TaskList({ tasks }) {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      {tasks.length === 0
        ? "You don't have tasks"
        : tasks.map((task) => (
            <TaskItem id={task.id} content={task.content}></TaskItem>
          ))}
    </div>
  );
}
