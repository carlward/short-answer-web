import React from 'react';
// import logo from './logo.svg';
import AnswerBoxes from './AnswerBoxes.js'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Automated Short Answer Grader</h2>
      </header>
      <h3>Grader Demo</h3>
      <AnswerBoxes />
    </div>
  );
}

export default App;
