import React from "react";
import CategoryButton from "../Button/CategoryButton";

export default function CategorySelectionSection({
  active,
  setCategory,
  setTasks,
}) {
  function handleClick(category) {
    setCategory(category);

    setTasks(JSON.parse(localStorage.getItem(category)) || []);
  }

  return (
    <section>
      <CategoryButton
        isActive={active === "toDo"}
        onClick={() => handleClick("toDo")}
      >
        To Do
      </CategoryButton>
      <CategoryButton
        isActive={active === "inProgress"}
        onClick={() => handleClick("inProgress")}
      >
        In Progress
      </CategoryButton>
      <CategoryButton
        isActive={active === "done"}
        onClick={() => handleClick("done")}
      >
        Done
      </CategoryButton>
    </section>
  );
}
