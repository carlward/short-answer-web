import React from 'react'

const ScoreRow = props => {
  const metric = props.metric;
  const name = props.name;

  return (
    <tr>
      <td>{name}</td>
      <td>{metric}</td>
    </tr>
  );
}

const ScoreTable = props => {
  const rows = [];
  const score = props.estimScore;
  rows.push(
    <ScoreRow
      metric={score}
      name="Score"
      key={score}
    />
  )
  props.scoreProbs.forEach((probs) =>
    rows.push(
      <ScoreRow
        metric={probs[1].toPrecision(4)}
        name={probs[0]}
        key={probs[0]}
      />
    )
  );

  return (
    <table className={props.className}>
      <thead>
        <tr>
          <th>Metric</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ScoreTable
