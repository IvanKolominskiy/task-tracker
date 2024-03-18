import React from "react";
import CategoryButton from "../Button/CategoryButton";
import "./CategoryButtonsContainer.css";

export default function CategoryButtonsContainer() {
  return (
    <div className="category-button-container">
      <CategoryButton>To Do</CategoryButton>
      <CategoryButton>In Progress</CategoryButton>
      <CategoryButton>Done</CategoryButton>
    </div>
  );
}
