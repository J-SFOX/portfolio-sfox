import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router,Route, Link,Switch } from 'react-router-dom';

// Components
import HomePage from './components/HomePage';
import Menu from './components/Menu';
import Error from "./Pages/Error";
//Pages 
import Projects from "./Pages/Projects";
import ContactMe from "./Pages/ContactMe";


import './App.css';


function App() {
  
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route path="/" exact >
          <HomePage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact-me">
          <ContactMe />
        </Route>
        <Route path="*">
            <Error/>
        </Route>
      </Switch>
    </Router>
  );
}
// just decide if i ll use an intern link or extern link 
export default App;
 

// ui in react get updated by changing the state