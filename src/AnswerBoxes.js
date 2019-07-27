import React from 'react';
import TextArea from './TextArea.js';
import AnswerScoreResult from './AnswerScoreResult.js';
const ENDPOINT = 'https://8wplgcc305.execute-api.us-west-2.amazonaws.com/prod/score-answers';
const API_KEY = process.env.SHORT_ANSWER_INFERENCE_API_KEY;

const lengthValidator = (value, length) => {
  return value.length >= length.minLength && value.length <= length.maxLength;
}
const requiredValidator = value => {
  return value.trim() !== '';
}

const validate = (value, rules) => {
  let isValid = true;

  for (let rule in rules) {
    switch (rule) {
      case 'length': isValid = isValid && lengthValidator(value, rules[rule]); break;
      case 'isRequired': isValid = isValid && requiredValidator(value); break;
      default: isValid = true;
    }

  }
  return isValid;
}

class AnswerBoxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      isSubmitted: false,
      estimScore: 1,
      scoreProbs: [],
      formInputs: {
        studentAnswer: {
          value: '',
          valid: false,
          placeholder: 'Enter student answer',
          validationRules: {
            length: {
              minLength: 5,
              maxLength: 500
            },
            isRequired: true
          },
          touched: false
        },
        refAnswer: {
          value: '',
          valid: false,
          placeholder: 'Enter reference answer',
          validationRules: {
            length: {
              minLength: 5,
              maxLength: 500
            },
            isRequired: true
          },
          touched: false
        }
      }
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const updatedInputs = {
      ...this.state.formInputs
    };
    const updatedFormElement = {
      ...updatedInputs[name]
    };

    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(value, updatedFormElement.validationRules);
    updatedInputs[name] = updatedFormElement;

    let isValid = true;
    for (let id in updatedInputs) {
      isValid = isValid && updatedInputs[id].valid
    }

    this.setState({
      formInputs: updatedInputs,
      isValid: isValid
    });

  }

  handleSubmit = () => {
    const formData = {};
    for (let id in this.state.formInputs) {
      formData[id] = this.state.formInputs[id].value;
    }
    const payload = {
      "seq": [formData["studentAnswer"]],
      "refSeq": [formData["refAnswer"]],
    }
    this.postData(ENDPOINT, payload)
      .then((data) => {
        this.setState({
          estimScore: data.data[0].estimScore,
          scoreProbs: Object.entries(data.data[0].scoreProbs),
          isSubmitted: true
        })
      })
      .catch(console.log)
    console.log(this.state);
  }

  postData = (url, payload) => {
    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
  }

  render() {
    return (
      <div className="App-AnswerBoxes">
        <label htmlFor="studentAnswer" className="studentAnswer">Student Answer</label>
        <TextArea
          name="studentAnswer"
          placeholder={this.state.formInputs.studentAnswer.placeholder}
          value={this.state.formInputs.studentAnswer.value}
          onChange={this.handleChange}
          touched={this.state.formInputs.studentAnswer.touched}
          valid={this.state.formInputs.studentAnswer.valid}
        />
        <label htmlFor="studentAnswer" className="refAnswer">Reference Answer</label>
        <TextArea
          name="refAnswer"
          placeholder={this.state.formInputs.refAnswer.placeholder}
          value={this.state.formInputs.refAnswer.value}
          onChange={this.handleChange}
          touched={this.state.formInputs.refAnswer.touched}
          valid={this.state.formInputs.refAnswer.valid}
        />
        <button
          onClick={this.handleSubmit}
          disabled={!this.state.isValid}
        >
          Submit
        </button>
        {
          this.state.isSubmitted &&
          <label htmlFor="scoreResult" className="result">Result</label>
        }
        {
          this.state.isSubmitted &&
          <AnswerScoreResult
            name="scoreResult"
            estimScore={this.state.estimScore}
            scoreProbs={this.state.scoreProbs}
          />
        }
      </div>
    );
  }
}

export default AnswerBoxes
