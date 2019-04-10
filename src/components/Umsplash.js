import React, { Component } from 'react'
import "../assets/styles/umsplash.css"
export default class Umsplash extends Component {
   constructor(props) {
  super(props);

  this.state = {
    pics: [],
    url:"",
  };
}
componentDidMount() {
  fetch('https://api.unsplash.com/photos/?client_id=f56e84ec83c1ab9bd834ea6234ecfaa6e93936a240359645e52a3cc3f44cb714')
    .then(response => {
      return(response.json())
  })
  .then(res=>{
    res.forEach(r=>{ 
    console.log(r.urls.full)
    this.setState(state =>{this.state.pics.push(r.urls.full)})
 })
 console.log(this.state.pics[Math.floor((Math.random() * 10))])
  })
 
  .catch(function (err) {
    console.log("Something went wrong!", err)
  })
    } 

 handelClick= (event) => { 
   let x =this.state.pics[Math.floor((Math.random() * 10))]
   alert("hiii")
   this.setState({url:x})}
 
render() {
  return (
  <img className="spinner" src="../img/spinner.svg" alt="spinner" onClick={this.handelClick} />
  );
  }
}
