import React from "react";
import classes from "./CategoryButton.module.css";

export default function CategoryButton({ children, isActive, onClick }) {
  return (
    <button
      className={
        isActive
          ? `${classes.categoryButton} ${classes.active}`
          : classes.categoryButton
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
