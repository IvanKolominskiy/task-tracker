import React from "react";
import TaskItem from "../Item/TaskItem";

export default function TaskList({ tasks, setTasks, category }) {
  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));

    localStorage.setItem(
      category,
      JSON.stringify(tasks.filter((task) => task.id !== id))
    );
  }

  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      {tasks.length === 0
        ? "You don't have tasks"
        : tasks.map((task) => (
            <TaskItem
              key={task.id}
              content={task.content}
              taskId={task.id}
              deleteTask={(id) => handleDelete(id)}
            ></TaskItem>
          ))}
    </div>
  );
}
