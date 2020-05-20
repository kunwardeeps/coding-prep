import React from 'react';
import logo from './logo.svg';
import './App.css';
import readXlsxFile from 'read-excel-file';

class App extends React.Component {

  constructor(props) {
    super(props);
    readXlsxFile('./data/Leetcode_Approach.xlsx').then((rows) => {
      console.log(JSON.stringify(rows));
      // `rows` is an array of rows
      // each row being an array of cells.
    })
  }

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default App;
