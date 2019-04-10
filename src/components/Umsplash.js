import React, { Component } from 'react'
import "../assets/styles/umsplash.css"
export default class Umsplash extends Component {
   constructor(props) {
  super(props);

  this.state = {
    pics: [],
  };
}
componentDidMount() {
  fetch("https://api.unsplash.com/photos/?client_id=f56e84ec83c1ab9bd834ea6234ecfaa6e93936a240359645e52a3cc3f44cb714")
    .then((response) => {console.log(response.json())
    this.setState(state => this.state.pics=response.url) 
  }
  )
    } 

 handelClick= (event) => { this.componentDidMount()}

render() {
  return (
  <img className="spinner" src="../img/spinner.svg" alt="spinner" onClick={this.handelClick} />
  );
  }
}
