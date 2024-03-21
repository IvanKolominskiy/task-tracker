import React, { useState } from "react";
import classes from "./InputForm.module.css";
import { v4 } from "uuid";

export default function InputForm({ category, tasks, setTasks, taskId, mode }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!value) {
      return;
    }

    if (mode === "add") {
      const newTasks = [
        { id: v4(), content: value, needEdit: false },
        ...tasks,
      ];

      localStorage.setItem(category, JSON.stringify(newTasks));
      setTasks(newTasks);

      setValue("");
    }

    if (mode === "edit") {
      setTasks(
        tasks.map((task) =>
          task.id === taskId
            ? { ...task, content: value, needEdit: false }
            : task
        )
      );

      localStorage.setItem(
        category,
        JSON.stringify(
          tasks.map((task) =>
            task.id === taskId
              ? { ...task, content: value, needEdit: false }
              : task
          )
        )
      );
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
      {mode === "add" ? (
        <button type="submit" className={classes.submitFormButton}>
          Add Task
        </button>
      ) : (
        <button type="submit" className={classes.submitFormButton}>
          Edit Task
        </button>
      )}
    </form>
  );
}
