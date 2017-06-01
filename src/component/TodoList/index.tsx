import React from 'react';
import { Table } from 'antd';
import moment from 'moment';
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

export default () => (
  <div>
    <h1 className="todolist">This is a todo list!</h1>
    <Table
      columns={COLUMNS}
      dataSource={testData}
    />
  </div>
);
