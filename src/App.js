import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  name = "Vaibhav"
  render() {
    return (
      <>
      <Navbar/>
      <News pageSize = {6}/>
      </>
    )
  }
}

