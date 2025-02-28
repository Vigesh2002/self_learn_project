// Class components are ES6 classes that extend React.Component. They used to be the primary way to create React components before hooks were introduced.
import { Component } from "react";

class ClassComponents extends Component {
  constructor(e) {
    super(e);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({count: this.state.count + 100});
  }

  decrement = () => {
    this.setState({count: this.state.count - 100});
  }

  reset = () => {
    this.setState({count: 0});
  }
  render() {
    return <div>
        <h1>Class Component</h1>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
    </div>;
  }
}

export default ClassComponents;
