// import logo from './logo.svg';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AuthContainer from './views/authPage/AuthContainer';
import Posts from './views/posts/Posts'
// import Ayo from "./Ayo";
// import Male from './Male'
// import Login from './views/authPage/login/Login';
// import Register from './views/authPage/register/Register

function App() {
    
    // let name = 'Ayo'

      return (
        <div className="container">

          <Router>
            <Switch>
              <Route path='/auth'>
                <AuthContainer />
              </Route>

              <Route path='/posts'>
                <Posts />
              </Route>

              {/* <Route path='/posts'>
                <Home />
              </Route> */}
            </Switch>
          </Router>
            
            {/* Hi, Afa m bu { name }
            <Ayo />
            <Male color='red' height={ 5 } weight={ 50 } />
            <Male color='black' height={ 6 } weight={ 60 } />
            <Male color='yellow' height={ 7 } weight={ 70 } /> */}

            {/*<header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>*/}
        
        </div>
  );
}

export default App;
