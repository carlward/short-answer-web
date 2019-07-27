import React from "react"
import { CSVLink } from "react-csv"
import { ClipLoader } from 'react-spinners';
import CSVUpload from "./CSVUpload"

const ENDPOINT = 'https://8wplgcc305.execute-api.us-west-2.amazonaws.com/prod/score-answers';
const API_KEY = process.env.SHORT_ANSWER_INFERENCE_API_KEY;

class CSVCompare extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        refData: undefined,
        studentData: undefined,
        outputData: undefined,
      },
      scored: false,
      loading: false
    }
    this.isValid = false;
  }

  uploadCallBack = (name, csvData) => {
    const updatedData = {
      ...this.state.data
    }
    updatedData[name] = csvData;
    this.setState({
      data: updatedData,
      isValid: (
        updatedData.refData !== undefined
        && updatedData.studentData !== undefined
      ),
    })
  }

  combineData = (studentData, refData) => {
    const combinedData = [];
    const refLookup = refData.reduce((acc, row) => {
      return { ...acc, [row.answerId]: row.refAnswer };
    }, {});

    studentData.forEach((row) =>
      combinedData.push({
        answerId: row.answerId,
        studentSeq: row.studentAnswer,
        refSeq: refLookup[row.answerId],
      })
    );

    return combinedData
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

  handleSubmit = () => {
    this.setState({ loading: true, scored: false })
    const updatedData = {
      ...this.state.data
    }
    const outputData = updatedData.studentData;
    const combinedData = this.combineData(updatedData.studentData, updatedData.refData);

    const payload = {
      "seq": combinedData.map(row => row.studentSeq),
      "refSeq": combinedData.map(row => row.refSeq),
    }

    this.postData(ENDPOINT, payload)
      .then(data => {
        data.data.forEach((row, index) => {
          var newRow = outputData[index];
          newRow["score"] = row.estimScore;
          outputData[index] = newRow;
        })
        updatedData.outputData = outputData;
        this.setState({ data: updatedData, scored: true, loading: false })
      })
      .catch(error => {this.setState({loading: false}); console.log(error)})

  }

  render() {
    return (
      <div className="csv-files">
        <CSVUpload
          name="studentData"
          label="Student CSV"
          uploadCallBack={this.uploadCallBack}
        />
        <CSVUpload
          name="refData"
          label="Reference CSV"
          uploadCallBack={this.uploadCallBack}
        />
        <br />
        <div className="csv-submit">
          <button
            className="csv-submit-button"
            onClick={this.handleSubmit}
            disabled={!this.state.isValid}
          >
            Submit
          </button>
          <ClipLoader
            sizeUnit={"px"}
            size={12}
            color={"#36D7B7"}
            loading={this.state.loading}
          />
        </div>
        <div className="csv-Output">
          {
            this.state.scored && (
              <CSVLink
                data={this.state.data.outputData}
                filename={"scored_answers.csv"}
                className="App-link"
                target="_blank"
              >
                Download scores
            </CSVLink>)
          }
        </div>
      </div>
    );
  }
}

export default CSVCompare;
