import React from "react";
import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = (props) => {
  const taskArray = props.taskArray;
  const taskList = taskArray.map((taskElement, index) => (
    <Task
      key={index}
      taskElement={taskElement}
      checkboxHandler={(event) => event && props.taskCheckedHandler(index)}
    />
  ));
  return (
    <div className="taskList">
      {!taskList.length && <h3>Nothing on your list!</h3>}
      {taskList.length > 0 && taskList}
    </div>
  );
};

export default TaskList;
