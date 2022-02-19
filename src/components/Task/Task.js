import React from "react";
import "./Task.css";

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const task = this.props.task;
    return <div className="task">{task}</div>;
  }
}

export default Task;
