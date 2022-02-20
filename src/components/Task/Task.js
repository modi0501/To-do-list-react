import React from "react";
import "./Task.css";

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const taskElement = this.props.taskElement;
    return (
      <div className={!taskElement.removed ? "task" : "task removed"}>
        <input type="checkbox" onChange={this.props.checkboxHandler} />
        {taskElement.task}
      </div>
    );
  }
}

export default Task;
