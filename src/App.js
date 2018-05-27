import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentList from './component/studentList';

class App extends Component {
  render() {
    return (
      <div>
        <StudentList/>
      </div>
    );
  }
}

export default App;
