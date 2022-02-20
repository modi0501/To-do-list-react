import React from "react";
import Task from "../Task/Task";
import "./TaskList.css";
class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const taskArray = this.props.taskArray;
    const taskList = taskArray.map((taskElement, index) => (
      <Task
        key={index}
        taskElement={taskElement}
        checkboxHandler={(event) =>
          event && this.props.taskCheckedHandler(index)
        }
      />
    ));
    return <div className="taskList">{taskList}</div>;
  }
}

export default TaskList;
