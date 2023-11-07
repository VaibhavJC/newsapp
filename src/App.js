import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  HashRouter,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () =>  {
  const pageSize = 12;
  const apiKey = "11fc6bdec96049ffb10672b70f99e6ee";


  const [progress, setProgress] = useState(0)



    return (
      <>
      <HashRouter>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
        <Route exact path='/' element={<News setProgress = {setProgress} apiKey={apiKey} key='general' pageSize = {pageSize} country = "us" category = "General" />}/>
          <Route exact path='/general' element={<News setProgress = {setProgress} apiKey={apiKey} key='general' pageSize = {pageSize} country = "us" category = "General" />}/>
          <Route exact path='/business' element={<News setProgress = {setProgress} apiKey={apiKey} key='business' pageSize = {pageSize} country = "us" category = "Business" />}/>
          <Route exact path='/entertainment' element={<News setProgress = {setProgress} apiKey={apiKey} key='entertainment' pageSize = {pageSize} country = "us" category = "Entertainment" />}/>
          <Route exact path='/health' element={<News setProgress = {setProgress} apiKey={apiKey} key='health' pageSize = {pageSize} country = "us" category = "Health" />}/>
          <Route exact path='/science' element={<News setProgress = {setProgress} apiKey={apiKey} key='science' pageSize = {pageSize} country = "us" category = "Science" />}/>
          <Route exact path='/sports' element={<News setProgress = {setProgress} apiKey={apiKey} key='sports' pageSize = {pageSize} country = "us" category = "Sports" />}/>
          <Route exact path='/technology' element={<News setProgress = {setProgress} apiKey={apiKey} key='technology' pageSize = {pageSize} country = "us" category = "Technology" />}/>
        </Routes>
      </HashRouter>
      </>
    )
}

export default App;

