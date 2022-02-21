import React from "react";
import "./Task.css";

const Task = (props) => {
  const taskElement = props.taskElement;
  const checkboxHandler = props.checkboxHandler;
  return (
    <div className={!taskElement.removed ? "task" : "task removed"}>
      <input type="checkbox" onChange={checkboxHandler} />
      {taskElement.task}
    </div>
  );
};

export default Task;
