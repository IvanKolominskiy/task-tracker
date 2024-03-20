import React, { useState } from "react";
import classes from "./InputForm.module.css";

export default function InputForm({ addTask }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (value) {
      addTask(value);

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
