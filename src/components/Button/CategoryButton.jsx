import React from "react";
import "./CategoryButton.css";

export default function CategoryButton({ children }) {
  return <button className="category-button">{children}</button>;
}
