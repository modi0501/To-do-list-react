import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input/input";
import TaskList from "./components/TaskList/TaskList";

const App = (props) => {
  const [currentTask, setCurrentTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  const inputChangeHandler = (event) => {
    setCurrentTask((prevState) => {
      return event.target.value;
    });
  };

  const inputSubmitHandler = (event) => {
    event.preventDefault();
    if (!currentTask) return;
    setTaskArray((prevState) => {
      return [...prevState, { task: currentTask, removed: false }];
    });
    setCurrentTask("");
  };

  const taskCheckedHandler = (index) => {
    setTaskArray((prevState) => {
      return prevState.map((element, eIndex) => {
        if (eIndex === index) {
          return {
            task: element.task,
            removed: !element.removed,
          };
        }
        return element;
      });
    });
  };
  return (
    <div className="App">
      <h1>To Do List</h1>
      <Input
        inputSubmitHandler={inputSubmitHandler}
        inputChangeHandler={inputChangeHandler}
        value={currentTask}
      />
      <TaskList taskArray={taskArray} taskCheckedHandler={taskCheckedHandler} />
    </div>
  );
};

export default App;
