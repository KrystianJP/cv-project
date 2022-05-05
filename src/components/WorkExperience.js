import React from "react";
import "../styles/style.css";

class WorkInfo extends React.Component {
  constructor(props) {
    super(props);

    this.add = this.add.bind(this);

    this.state = { jobs: [this.jobForm(0)], ids: 1 };
  }

  add() {
    this.setState({
      jobs: this.state.jobs.concat(this.jobForm(this.state.ids)),
      ids: this.state.ids + 1,
    });
  }

  jobForm(id) {
    return (
      <li className="job-form" key={id}>
        <div className="input-container">
          <label htmlFor={"company" + id}>Company</label>
          <input type="text" name={"company" + id} id={"company" + id}></input>
        </div>
      </li>
    );
  }

  render() {
    return (
      <div className="input-section">
        <h2>Work Experience</h2>
        <ul className="jobs-list">{this.state.jobs}</ul>
        <button type="button" className="add-job-button" onClick={this.add}>
          +
        </button>
      </div>
    );
  }
}

export default WorkInfo;
