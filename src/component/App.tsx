import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HelloWorld from './HelloWorld';
import TodoList from './TodoList/index';

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact={true} component={HelloWorld} />
      <Route path="/todolist" component={TodoList} />
    </Switch>
  </Router>
);
