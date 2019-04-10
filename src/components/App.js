import React, { Component } from "react";
import Memo from "./Memo";
import "./../assets/styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Memo />
        </header>
      </div>
    );
  }
}

export default App;
