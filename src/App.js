import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

addition = () => {
  this.setState ({
    count: this.state.count + 1
  });
};

handleClick = () => {
  this.setState ({
    count: 0
  });
}

handleClickAdd = () => {
  this.setState ({
    count: this.state.count + 1
  });
}

handleClickRemove = () => {
  if (this.state.count > 0){
  this.setState ({count: this.state.count - 1
  });
}
}


render() {
  return (
    <div className = 'App'>
    <h2>Class based</h2>
    <div className = 'circle'>
      <div className={this.state.count %2 === 0 ? "circle even" : "circle odd" } onClick={this.addition}>
      <h1>{this.state.count}</h1>
      </div>
    </div>
    <div className = 'buttons'>
      <button onClick={this.handleClick}>Reset counter</button>
      <button onClick={this.handleClickAdd}>Add one</button>
      <button onClick={this.handleClickRemove}>Remove one</button>
    </div>
    <Counter/>
    </div>

);
}

}

export default App;

//class based component
