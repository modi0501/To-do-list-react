import React from "react";
import "./input.css";

const Input = (props) => {
  const inputSubmitHandler = props.inputSubmitHandler;
  const inputChangeHandler = props.inputChangeHandler;
  const value = props.value;
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
};

export default Input;
