import React from "react";
import { ReactDOM } from "react";

class Clock extends React.Component {
    //we can only make one constructor in one class
    constructor(props) {
      super(props);
      this.state = {date: new Date()};  
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  export default Clock;
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(Clock);