import React from 'react';
import './App.css';
import XLSX from 'xlsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/kunwardeeps/coding-prep/master/Leetcode_Approach.xlsx";
    fetch(url).then(function(res) {
      /* get the data as a Blob */
      if(!res.ok) throw new Error("fetch failed");
      return res.arrayBuffer();
    }).then(ab => {
      /* parse the data when it is received */
      var data = new Uint8Array(ab);
      var workbook = XLSX.read(data, {type:"array"});
      console.log(workbook);
      this.setState(workbook.Sheets);
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, KD</h1>
        <p>{JSON.stringify(this.state)}</p>
      </div>
    );
  }
}

export default App;
