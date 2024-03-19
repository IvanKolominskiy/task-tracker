import React from "react";
import CategoryButton from "../Button/CategoryButton";

export default function CategorySelectionSection() {
  return (
    <section>
      <CategoryButton>To Do</CategoryButton>
      <CategoryButton>In Progress</CategoryButton>
      <CategoryButton>Done</CategoryButton>
    </section>
  );
}
