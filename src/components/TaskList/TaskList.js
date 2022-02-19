import React from "react";
import Task from "../Task/Task";
import "./TaskList.css";
class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const taskArray = this.props.taskArray;
    const taskList = taskArray.map((task, index) => (
      <Task key={index} task={task} />
    ));
    return <div className="taskList">{taskList}</div>;
  }
}

export default TaskList;
