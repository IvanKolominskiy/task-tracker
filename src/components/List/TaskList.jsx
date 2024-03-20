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

  function handleDragStart(e, task) {
    e.dataTransfer.setData("task", JSON.stringify(task));
  }

  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      {tasks.length === 0
        ? "You don't have tasks"
        : tasks.map((task) => (
            <TaskItem
              key={task.id}
              content={task.content}
              deleteTask={() => handleDelete(task.id)}
              onDragStart={(e) => handleDragStart(e, task)}
            ></TaskItem>
          ))}
    </div>
  );
}
