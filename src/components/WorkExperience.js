import React, { useState } from "react";
import "../styles/style.css";

const WorkInfo = (props) => {
  const [jobs, setJobs] = useAsyncState([jobForm(0)]);
  const [ids, setIds] = useState(1);

  function add() {
    setJobs(jobs.concat(jobForm(ids))).then(props.changeValues(jobs, "Jobs"));
    setIds(ids + 1);
  }

  function remove(id) {
    let job = jobs.find((job) => {
      return job.jobForm.key === String(id);
    });

    setJobs(
      jobs
        .slice(0, jobs.indexOf(job))
        .concat(jobs.slice(jobs.indexOf(job) + 1)),
    ).then(props.changeValues(jobs, "Jobs"));
  }

  function updateJobs(e, changeKey, id) {
    let targetJob = jobs.filter((job) => job.id === id)[0];
    let index = -1;
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].id === id) {
        index = i;
        break;
      }
    }
    targetJob[changeKey] = e.target.value;

    setJobs(
      jobs
        .slice(0, index)
        .concat(targetJob)
        .concat(jobs.slice(index + 1)),
    ).then(props.changeValues(jobs, "Jobs"));
  }

  function jobForm(id) {
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
                  updateJobs(e, "company", id);
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
                  updateJobs(e, "title", id);
                }}
              ></input>
            </div>
          </div>
          <button
            type="button"
            className="delete-job-button"
            onClick={() => {
              remove(id);
            }}
          >
            -
          </button>
        </li>
      ),
    };
  }

  return (
    <div className="input-section">
      <h2>Work Experience</h2>
      <ul className="jobs-list">{jobs.map((job) => job.jobForm)}</ul>
      <button type="button" className="add-job-button" onClick={add}>
        +
      </button>
    </div>
  );
};

function useAsyncState(initialValue) {
  const [value, setValue] = useState(initialValue);
  let setValuePromise = (x) =>
    new Promise((resolve) => {
      setValue(x);
      resolve(x);
    });
  return [value, setValuePromise];
}

export default WorkInfo;
