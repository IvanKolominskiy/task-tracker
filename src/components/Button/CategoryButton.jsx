import React from "react";
import classes from "./CategoryButton.module.css";

export default function CategoryButton({
  children,
  isActive,
  onClick,
  onDrop,
  onDragOver,
}) {
  return (
    <button
      className={
        isActive
          ? `${classes.categoryButton} ${classes.active}`
          : classes.categoryButton
      }
      onClick={onClick}
      onDrop={(e) => onDrop(e)}
      onDragOver={(e) => onDragOver(e)}
    >
      {children}
    </button>
  );
}
