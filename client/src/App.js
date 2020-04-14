import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Box from './components/Box';
import AddForm from './components/AddForm';
import Overview from './components/Overview';

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Box} />
        <Route path="/add" component={AddForm} />
        <Route path="/overview" component={Overview} />
      </Switch>
    </Router>
  )
}