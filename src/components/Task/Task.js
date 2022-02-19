import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const task = this.props.task;
    return <div>{task}</div>;
  }
}

export default Task;
