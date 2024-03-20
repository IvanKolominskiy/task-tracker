import { useState } from "react";
import "./App.css";
import CategorySelectionSection from "./components/Section/CategorySelectionSection";
import InputForm from "./components/Form/InputForm";
import TaskList from "./components/List/TaskList";

function App() {
  const [category, setCategory] = useState("toDo");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem(category)) || []
  );

  return (
    <>
      <h1>Task Tracker</h1>
      <CategorySelectionSection
        active={category}
        setCategory={setCategory}
        setTasks={setTasks}
      ></CategorySelectionSection>
      <InputForm
        tasks={tasks}
        setTasks={setTasks}
        category={category}
      ></InputForm>
      <TaskList tasks={tasks}></TaskList>
    </>
  );
}

export default App;
