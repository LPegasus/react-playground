import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoList from './TodoList/index';
import HelloWorld from './HelloWorld';

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact={true} component={HelloWorld} />
      <Route path="/todolist" component={TodoList} />
    </Switch>
  </Router>
);
