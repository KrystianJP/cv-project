import React from "react";
import "../styles/style.css";

class WorkInfo extends React.Component {
  constructor(props) {
    super(props);

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);

    this.state = { jobs: [this.jobForm(0)], ids: 1 };
  }

  add() {
    this.setState({
      jobs: this.state.jobs.concat(this.jobForm(this.state.ids)),
      ids: this.state.ids + 1,
    });
  }

  remove(id) {
    let job = this.state.jobs.find((job) => {
      return job.key === String(id);
    });
    this.setState({
      jobs: this.state.jobs
        .slice(0, this.state.jobs.indexOf(job))
        .concat(this.state.jobs.slice(this.state.jobs.indexOf(job) + 1)),
    });
  }

  jobForm(id) {
    return (
      <li className="job-form" key={id}>
        <div className="job-form-inputs">
          <p className="job-form-title">Entry {id + 1}</p>
          <div className="input-container">
            <label htmlFor={"company" + id}>Company</label>
            <input
              type="text"
              name={"company" + id}
              id={"company" + id}
            ></input>
          </div>
          <div className="input-container">
            <label htmlFor={"job-title" + id}>Job Title</label>
            <input
              type="text"
              name={"job-title" + id}
              id={"job-title" + id}
            ></input>
          </div>
        </div>
        <button
          type="button"
          className="delete-job-button"
          onClick={() => {
            this.remove(id);
          }}
        >
          -
        </button>
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
