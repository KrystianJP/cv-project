import React from "react";
import "../styles/style.css";

class WorkInfo extends React.Component {
  constructor(props) {
    super(props);

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.updateJobs = this.updateJobs.bind(this);

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
      return job.jobForm.key === String(id);
    });
    this.setState(
      {
        jobs: this.state.jobs
          .slice(0, this.state.jobs.indexOf(job))
          .concat(this.state.jobs.slice(this.state.jobs.indexOf(job) + 1)),
      },
      () => {
        this.props.changeValues(this.state.jobs, "Jobs");
      },
    );
  }

  updateJobs(e, changeKey, id) {
    let targetJob = this.state.jobs.filter((job) => job.id === id)[0];
    let index = -1;
    for (let i = 0; i < this.state.jobs.length; i++) {
      if (this.state.jobs[i].id === id) {
        index = i;
        break;
      }
    }
    targetJob[changeKey] = e.target.value;

    this.setState(
      {
        jobs: this.state.jobs
          .slice(0, index)
          .concat(targetJob)
          .concat(this.state.jobs.slice(index + 1)),
      },
      () => {
        this.props.changeValues(this.state.jobs, "Jobs");
      },
    );
  }

  jobForm(id) {
    return {
      id,
      company: null,
      title: null,
      jobForm: (
        <li className="job-form" key={id}>
          <div className="job-form-inputs">
            <div className="input-container">
              <label htmlFor={"company" + id}>Company</label>
              <input
                type="text"
                name={"company" + id}
                id={"company" + id}
                onChange={(e) => {
                  this.updateJobs(e, "company", id);
                }}
              ></input>
            </div>
            <div className="input-container">
              <label htmlFor={"job-title" + id}>Job Title</label>
              <input
                type="text"
                name={"job-title" + id}
                id={"job-title" + id}
                onChange={(e) => {
                  this.updateJobs(e, "title", id);
                }}
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
      ),
    };
  }

  render() {
    return (
      <div className="input-section">
        <h2>Work Experience</h2>
        <ul className="jobs-list">
          {this.state.jobs.map((job) => job.jobForm)}
        </ul>
        <button type="button" className="add-job-button" onClick={this.add}>
          +
        </button>
      </div>
    );
  }
}

export default WorkInfo;
