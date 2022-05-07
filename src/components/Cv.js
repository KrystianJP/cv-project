import React from "react";
import "../styles/style.css";

class Cv extends React.Component {
  getUserImage() {
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

  jobElements(jobs) {
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
  }

  render() {
    return (
      <div className="cv">
        <div>
          <p className="cv-text cv-name">{this.props.values.name}</p>
          {this.getUserImage()}
          <p className="cv-text">
            <strong>Email: </strong>
            {this.props.values.email}
          </p>
          <p className="cv-text">
            <strong>Phone Number: </strong>
            {this.props.values.phone}
          </p>
        </div>
        <div>
          <h2>Education</h2>
          <p className="cv-text">
            <strong>School Name:</strong> {this.props.values.schoolName}
          </p>
          <p className="cv-text">
            <strong>Study Title:</strong> {this.props.values.studyTitle}
          </p>
          <p className="cv-text">
            <strong>Study Date:</strong> {this.props.values.studyDate}
          </p>
        </div>
        <div>
          <h2>Work Experience</h2>
          {this.jobElements(this.props.values.jobs)}
        </div>
      </div>
    );
  }
}

export default Cv;
