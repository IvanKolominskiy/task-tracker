import React from "react";
import CategoryButton from "../Button/CategoryButton";

export default function CategorySelectionSection({ active, onChange }) {
  return (
    <section>
      <CategoryButton
        isActive={active === "toDo"}
        onClick={() => onChange("toDo")}
      >
        To Do
      </CategoryButton>
      <CategoryButton
        isActive={active === "inProgress"}
        onClick={() => onChange("inProgress")}
      >
        In Progress
      </CategoryButton>
      <CategoryButton
        isActive={active === "done"}
        onClick={() => onChange("done")}
      >
        Done
      </CategoryButton>
    </section>
  );
}
