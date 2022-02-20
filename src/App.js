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
    this.taskCheckedHandler = this.taskCheckedHandler.bind(this);
  }

  inputChangeHandler(event) {
    this.setState((prevState) => ({
      ...prevState,
      currentTask: event.target.value,
    }));
  }

  inputSubmitHandler(event) {
    event.preventDefault();
    if (!this.state.currentTask) return;
    this.setState((prevState) => ({
      taskArray: [
        ...prevState.taskArray,
        { task: prevState.currentTask, removed: false },
      ],
      currentTask: "",
    }));
  }

  taskCheckedHandler(index) {
    this.setState((prevState) => ({
      taskArray: prevState.taskArray.map((element, eIndex) => {
        if (eIndex === index) {
          return {
            task: element.task,
            removed: !element.removed,
          };
        }
        return element;
      }),
    }));
  }

  render() {
    const taskArray = this.state.taskArray;
    return (
      <div className="App">
        <h1>To Do List</h1>
        <Input
          inputSubmitHandler={this.inputSubmitHandler}
          inputChangeHandler={this.inputChangeHandler}
          value={this.state.currentTask}
        />
        <TaskList
          taskArray={taskArray}
          checkboxHandler={this.checkboxHandler}
          taskCheckedHandler={this.taskCheckedHandler}
        />
      </div>
    );
  }
}

export default App;
