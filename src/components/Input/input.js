import React from "react";
import "./input.css";
class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const inputSubmitHandler = this.props.inputSubmitHandler;
    const inputChangeHandler = this.props.inputChangeHandler;
    const value = this.props.value;
    return (
      <form onSubmit={inputSubmitHandler} className="form">
        <input
          type="text"
          placeholder="Add a task"
          onChange={inputChangeHandler}
          value={value}
          className="input"
        />
        <button type="submit" className="button">
          Add Task
        </button>
      </form>
    );
  }
}

export default Input;
