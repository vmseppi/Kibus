import './App.css';
import Header from "./components/Header"
import Foother from './components/Foother'
import Main from "./components/Main"
import React from "react";
import Home from "./components/Home"
import { BrowserRouter , Route , Routes  } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
          <Route exact path="/" element={<Home/>}/>
      </Routes>
      <Routes>
          <Route exact path="header" element={<Header/>}/>
      </Routes> 
      <Routes>
          <Route exact path="main" element={<Main/>}/>
      </Routes>
      <Routes>
          <Route exact path="foother" element={<Foother/>}/>
      </Routes>
    </div> 

    </BrowserRouter>
  );
}

export default App;
