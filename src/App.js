import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  HashRouter,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  name = "Vaibhav"
  render() {
    return (
      <>
      <HashRouter>
        <Navbar/>
        <Routes>
        <Route exact path='/' element={<News key='general' pageSize = {6} country = "us" category = "General" />}/>
          <Route exact path='/general' element={<News key='general' pageSize = {6} country = "us" category = "General" />}/>
          <Route exact path='/business' element={<News key='business' pageSize = {6} country = "us" category = "Business" />}/>
          <Route exact path='/entertainment' element={<News key='entertainment' pageSize = {6} country = "us" category = "Entertainment" />}/>
          <Route exact path='/health' element={<News key='health' pageSize = {6} country = "us" category = "Health" />}/>
          <Route exact path='/science' element={<News key='science' pageSize = {6} country = "us" category = "Science" />}/>
          <Route exact path='/sports' element={<News key='sports' pageSize = {6} country = "us" category = "Sports" />}/>
          <Route exact path='/technology' element={<News key='technology' pageSize = {6} country = "us" category = "Technology" />}/>
        </Routes>
      </HashRouter>
      </>
    )
  }
}

