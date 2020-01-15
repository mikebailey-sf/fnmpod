import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Secret from './Components/Secret';
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/secret">Secret</Link></li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/secret" component={Secret} />
        </Switch>
        </BrowserRouter>

      </div>
    );
  }
}