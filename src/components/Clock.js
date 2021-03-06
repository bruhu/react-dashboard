import React from 'react';
import ReactDOM from 'react-dom';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <React.Fragment>
        <h1>Hello !</h1>
        <h2>{this.state.date.toLocaleTimeString()}.</h2>
      </React.Fragment>
    );
  }
  
}
