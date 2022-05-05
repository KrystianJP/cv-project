import React from "react";
import "../styles/style.css";

class EducationInfo extends React.Component {
  render() {
    return (
      <div className="input-section">
        <h2>Education</h2>
        <div className="input-container">
          <label htmlFor="school">School Name</label>
          <input type="text" name="school" id="school"></input>
        </div>
        <div className="input-container">
          <label htmlFor="study-title">Study Title</label>
          <input type="text" name="study-title" id="study-title"></input>
        </div>
        <div className="input-container">
          <label htmlFor="study-date">Study Date</label>
          <input type="date" name="study-date" id="study-date"></input>
        </div>
      </div>
    );
  }
}

export default EducationInfo;
