import React from "react";
import CategoryButton from "../Button/CategoryButton";

export default function CategorySelectionSection({
  active,
  setCategory,
  setTasks,
  tasks,
}) {
  function handleClick(category) {
    setCategory(category);

    setTasks(JSON.parse(localStorage.getItem(category)) || []);

    localStorage.setItem(
      active,
      JSON.stringify(
        tasks.map((task) =>
          task.needEdit ? { ...task, needEdit: false } : task
        )
      )
    );
  }

  function handleDrop(e, category) {
    const task = JSON.parse(e.dataTransfer.getData("task"));

    const storedTasks = JSON.parse(localStorage.getItem(category)) || [];
    localStorage.setItem(category, JSON.stringify([task, ...storedTasks]));

    setTasks(tasks.filter((item) => item.id !== task.id));

    localStorage.setItem(
      active,
      JSON.stringify(tasks.filter((item) => item.id !== task.id))
    );
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <section>
      <CategoryButton
        isActive={active === "toDo"}
        onClick={() => handleClick("toDo")}
        onDrop={(e) => handleDrop(e, "toDo")}
        onDragOver={(e) => handleDragOver(e)}
      >
        To Do
      </CategoryButton>
      <CategoryButton
        isActive={active === "inProgress"}
        onClick={() => handleClick("inProgress")}
        onDrop={(e) => handleDrop(e, "inProgress")}
        onDragOver={(e) => handleDragOver(e)}
      >
        In Progress
      </CategoryButton>
      <CategoryButton
        isActive={active === "done"}
        onClick={() => handleClick("done")}
        onDrop={(e) => handleDrop(e, "done")}
        onDragOver={(e) => handleDragOver(e)}
      >
        Done
      </CategoryButton>
    </section>
  );
}
