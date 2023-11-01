import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  HashRouter,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 12;
  apiKey = "11fc6bdec96049ffb10672b70f99e6ee";

  state={
    progress: 0
  }
  
  setProgress = (progress)  => {
    this.setState({progress: progress});
  }

  render() {
    return (
      <>
      <HashRouter>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
        <Route exact path='/' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key='general' pageSize = {this.pageSize} country = "us" category = "General" />}/>
          <Route exact path='/general' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key='general' pageSize = {this.pageSize} country = "us" category = "General" />}/>
          <Route exact path='/business' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key='business' pageSize = {this.pageSize} country = "us" category = "Business" />}/>
          <Route exact path='/entertainment' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key='entertainment' pageSize = {this.pageSize} country = "us" category = "Entertainment" />}/>
          <Route exact path='/health' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key='health' pageSize = {this.pageSize} country = "us" category = "Health" />}/>
          <Route exact path='/science' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key='science' pageSize = {this.pageSize} country = "us" category = "Science" />}/>
          <Route exact path='/sports' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key='sports' pageSize = {this.pageSize} country = "us" category = "Sports" />}/>
          <Route exact path='/technology' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key='technology' pageSize = {this.pageSize} country = "us" category = "Technology" />}/>
        </Routes>
      </HashRouter>
      </>
    )
  }
}

