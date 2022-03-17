import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Profile from './components/Profile.js';
import Login from './components/Login.js';



const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/profile" component={Profile} />
      </Switch>

    </Router>
  )
}

export default App