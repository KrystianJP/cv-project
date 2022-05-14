import React from "react";
import "../styles/style.css";

const Cv = (props) => {
  function getUserImage() {
    let image = (
      <img
        key="image"
        src="https://imgs.search.brave.com/wVaCsBwZBwBTc89EXf7S-Ef3xr4UQFVcxhdf1QEkd6U/rs:fit:916:980:1/g:ce/aHR0cDovL2Nkbi5v/bmxpbmV3ZWJmb250/cy5jb20vc3ZnL2lt/Z18yMTAzMTgucG5n"
        className="user-img"
        alt="user"
      ></img>
    );
    return image;
  }

  function jobElements(jobs) {
    if (jobs) {
      return jobs.map((job) => {
        return (
          <div className="cv-job-container" key={job.id}>
            <p className="cv-text cv-company">{job.company}</p>
            <p className="cv-text">
              <strong>Title: </strong>
              {job.title}
            </p>
          </div>
        );
      });
    } else {
      return null;
    }
  }

  function studyDateText(from, to) {
    const options = { year: "numeric", month: "long", day: "numeric" };

    let result = "";
    if (from) {
      result += "From " + new Date(from).toLocaleString(undefined, options);
    }
    if (from && to) {
      result += " to " + new Date(to).toLocaleString(undefined, options);
    }
    if (from && !to) {
      result += " to now";
    }

    return result;
  }

  return (
    <div className="cv">
      <div>
        <p className="cv-text cv-name">{props.values.name}</p>
        {getUserImage()}
        <p className="cv-text">
          <strong>Email: </strong>
          {props.values.email}
        </p>
        <p className="cv-text">
          <strong>Phone Number: </strong>
          {props.values.phone}
        </p>
      </div>
      <div>
        <h2>Education</h2>
        <p className="cv-text">
          <strong>School Name:</strong> {props.values.schoolName}
        </p>
        <p className="cv-text">
          <strong>Study Title:</strong> {props.values.studyTitle}
        </p>
        <p className="cv-text">
          <strong>Study Date:</strong>{" "}
          {studyDateText(props.values.studyDateFrom, props.values.studyDateTo)}
        </p>
      </div>
      <div>
        <h2>Work Experience</h2>
        {jobElements(props.values.jobs)}
      </div>
    </div>
  );
};

export default Cv;
