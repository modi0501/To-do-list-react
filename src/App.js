import React from "react";
import "./App.css";
import Input from "./components/Input/input";

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Hello there</h1>
//       <Input inputSubmitHandler={() => {}} inputChangeHandler={() => {}} />
//     </div>
//   );
// };

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
    return (
      <div className="App">
        <h1>To Do List</h1>
        <Input
          inputSubmitHandler={this.inputSubmitHandler}
          inputChangeHandler={this.inputChangeHandler}
        />
      </div>
    );
  }
}

export default App;
