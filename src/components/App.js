import React, { Component } from "react";
import Memo from "./Memo";
import "./../assets/styles/App.css";
import Clock from "./Clock";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Clock />
           <Memo />
         
        </header>
      </div>
    );
  }
}

export default App;
