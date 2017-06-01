import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HelloWorld from './HelloWorld';
import TodoList from './TodoList/index';
export default () => (React.createElement(Router, null,
    React.createElement(Switch, null,
        React.createElement(Route, { path: "/", exact: true, component: HelloWorld }),
        React.createElement(Route, { path: "/todolist", component: TodoList }))));
