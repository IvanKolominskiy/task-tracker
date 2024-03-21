import React from "react";
import TaskItem from "../Item/TaskItem";
import InputForm from "../Form/InputForm";

export default function TaskList({ tasks, setTasks, category }) {
  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));

    localStorage.setItem(
      category,
      JSON.stringify(tasks.filter((task) => task.id !== id))
    );
  }

  function handleEdit(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, needEdit: true }
          : { ...task, needEdit: false }
      )
    );
    localStorage.setItem(
      category,
      JSON.stringify(
        tasks.map((task) =>
          task.id === id
            ? { ...task, needEdit: true }
            : { ...task, needEdit: false }
        )
      )
    );
  }

  function handleDragStart(e, task) {
    e.dataTransfer.setData("task", JSON.stringify(task));
  }

  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      {tasks.length === 0
        ? "You don't have tasks"
        : tasks.map((task) =>
            task.needEdit ? (
              <InputForm
                key={task.id}
                category={category}
                tasks={tasks}
                setTasks={setTasks}
                taskId={task.id}
                mode={"edit"}
              ></InputForm>
            ) : (
              <TaskItem
                key={task.id}
                content={task.content}
                deleteTask={() => handleDelete(task.id)}
                editTask={() => handleEdit(task.id)}
                onDragStart={(e) => handleDragStart(e, task)}
              ></TaskItem>
            )
          )}
    </div>
  );
}
