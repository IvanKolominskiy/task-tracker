import { useState } from "react";
import "./App.css";
import CategorySelectionSection from "./components/Section/CategorySelectionSection";

function App() {
  const [category, setCategory] = useState("toDo");

  return (
    <>
      <h1>Task Tracker</h1>
      <CategorySelectionSection
        active={category}
        onChange={(current) => setCategory(current)}
      ></CategorySelectionSection>
    </>
  );
}

export default App;
