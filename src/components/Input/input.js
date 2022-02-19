import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const inputSubmitHandler = this.props.inputSubmitHandler;
    const inputChangeHandler = this.props.inputChangeHandler;
    return (
      <form onSubmit={inputSubmitHandler}>
        <input
          type="text"
          placeholder="Add a task"
          onChange={inputChangeHandler}
        />
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

export default Input;
