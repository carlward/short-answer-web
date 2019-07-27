import React from "react"
import Papa from "papaparse"
import checkmark from './correct.svg'

class CSVUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      csvfile: undefined,
      done: false
    };
    this.updateData = this.updateData.bind(this);
  }
  handleChange = event => {
    this.setState({
      csvfile: event.target.files[0],
      done: false
    });
  }

  importCSV = () => {
    Papa.parse(this.state.csvfile, {
      complete: this.updateData,
      header: true
    });
  }

  updateData = (result) => {
    let data = result.data;
    this.props.uploadCallBack(this.props.name, data)
    this.setState({ done: true })
  }

  render() {
    return (
      <div className="csv-upload">
        <label
          htmlFor="studentCSV"
          className="csv-label"
        >
          {this.props.label}
        </label>
        <input
          type="file"
          className="csv-file"
          ref={input => {
            this.filesInput = input;
          }}
          name={this.props.name}
          placeholder={null}
          onChange={this.handleChange}
        />
        <div className="csv-upload-container">
          <button
            className="csv-upload-button"
            onClick={this.importCSV}
            disabled={this.state.csvfile === undefined ? true : false}>
            upload
          </button>
          <img
            className="upload-icon"
            alt="done"
            src={checkmark}
            style={{
              opacity:
                this.state.done ? 1.0 : 0.0
            }}
          />
        </div>
      </div>
    );
  }
}

export default CSVUpload
