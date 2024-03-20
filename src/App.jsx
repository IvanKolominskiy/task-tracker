import { useState } from "react";
import "./App.css";
import CategorySelectionSection from "./components/Section/CategorySelectionSection";
import InputForm from "./components/Form/InputForm";
import { v4 } from "uuid";
import TaskList from "./components/List/TaskList";

function App() {
  const [category, setCategory] = useState("toDo");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem(category)) || []
  );

  function handleChange(category) {
    setCategory(category);

    setTasks(JSON.parse(localStorage.getItem(category)) || []);
  }

  function addTask(value) {
    const newTasks = [{ id: v4(), content: value }, ...tasks];

    localStorage.setItem(category, JSON.stringify(newTasks));
    setTasks(newTasks);
  }

  return (
    <>
      <h1>Task Tracker</h1>
      <CategorySelectionSection
        active={category}
        onChange={(current) => handleChange(current)}
      ></CategorySelectionSection>
      <InputForm addTask={(task) => addTask(task)}></InputForm>
      <TaskList tasks={tasks}></TaskList>
    </>
  );
}

export default App;
