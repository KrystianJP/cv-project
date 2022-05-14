import React from "react";
import "../styles/style.css";

class EducationInfo extends React.Component {
  render() {
    return (
      <div className="input-section">
        <h2>Education</h2>
        <div className="input-container">
          <label htmlFor="school">School Name</label>
          <input
            type="text"
            name="school"
            id="school"
            onChange={(e) => {
              this.props.changeValues(e.target.value, "SchoolName");
            }}
          ></input>
        </div>
        <div className="input-container">
          <label htmlFor="study-title">Study Title</label>
          <input
            type="text"
            name="study-title"
            id="study-title"
            onChange={(e) => {
              this.props.changeValues(e.target.value, "StudyTitle");
            }}
          ></input>
        </div>
        <div className="input-container">
          <label>Study Date</label>
          <div className="dates-container">
            <div>
              <label htmlFor="study-date-from" className="study-date-label">
                From:
              </label>
              <input
                type="date"
                name="study-date-from"
                id="study-date-from"
                className="study-date"
                onChange={(e) => {
                  this.props.changeValues(e.target.value, "StudyDateFrom");
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="study-date-to" className="study-date-label">
                To:
              </label>
              <input
                type="date"
                name="study-date-to"
                id="study-date-to"
                className="study-date"
                onChange={(e) => {
                  this.props.changeValues(e.target.value, "StudyDateTo");
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EducationInfo;
