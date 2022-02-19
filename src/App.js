import React from "react";
import "./App.css";
import Input from "./components/Input/input";
import TaskList from "./components/TaskList/TaskList";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTask: "", taskArray: [] };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.inputSubmitHandler = this.inputSubmitHandler.bind(this);
  }

  inputChangeHandler(event) {
    this.setState((prevState) => ({
      ...prevState,
      currentTask: event.target.value,
    }));
  }

  inputSubmitHandler(event) {
    this.setState((prevState) => ({
      ...prevState,
      taskArray: [...prevState.taskArray, prevState.currentTask],
    }));
    event.preventDefault();
  }

  render() {
    const taskArray = this.state.taskArray;
    return (
      <div className="App">
        <h1>To Do List</h1>
        <Input
          inputSubmitHandler={this.inputSubmitHandler}
          inputChangeHandler={this.inputChangeHandler}
        />
        <TaskList taskArray={taskArray} />
      </div>
    );
  }
}

export default App;
