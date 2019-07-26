import React from 'react'
import ScoreTable from './ScoreTable'

const AnswerScoreResult = props => {
  return (
    <div className="result-table">
      <ScoreTable
        estimScore={props.estimScore}
        scoreProbs={props.scoreProbs}
        className="result-table"
      />
    </div>
  );
}

export default AnswerScoreResult
