import React from 'react';
import AnswerBoxes from './AnswerBoxes.js'
import CSVCompare from './CSVCompare.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Automated Short Answer Grader</h2>
      </header>
      <h3>Grader Demo</h3>
      <AnswerBoxes />
      <br />
      <h3>CSV Upload</h3>
      <CSVCompare />
    </div>
  );
}

export default App;
