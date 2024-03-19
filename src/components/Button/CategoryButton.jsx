import React from "react";
import "./CategoryButton.css";

export default function CategoryButton({ children, isActive, onClick }) {
  return (
    <button
      className={isActive ? "category-button active" : "category-button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
