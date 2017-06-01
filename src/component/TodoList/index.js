import React from 'react';
import { Table } from 'antd';
import './todolist.less';
const COLUMNS = [{
        title: 'ID',
        dataIndex: 'id'
    }, {
        title: 'Name',
        dataIndex: 'name',
    }, {
        title: 'Age',
        dataIndex: 'age'
    }];
const testData = [{
        id: 1,
        name: 'LPegasus',
        age: 99
    }, {
        id: 2,
        name: 'Eva',
        age: 1
    }, {
        id: 3,
        name: 'Ricky',
        age: 16
    }];
export default () => (React.createElement("div", null,
    React.createElement("h1", { className: "todolist" }, "This is a todo list!"),
    React.createElement(Table, { columns: COLUMNS, dataSource: testData })));
