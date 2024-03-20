import React, { useState } from "react";
import classes from "./InputForm.module.css";
import { v4 } from "uuid";

export default function InputForm({ category, tasks, setTasks }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (value) {
      const newTasks = [{ id: v4(), content: value }, ...tasks];

      localStorage.setItem(category, JSON.stringify(newTasks));
      setTasks(newTasks);

      setValue("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={classes.inputForm}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={classes.formInput}
      />
      <button type="submit" className={classes.submitFormButton}>
        Add Task
      </button>
    </form>
  );
}
