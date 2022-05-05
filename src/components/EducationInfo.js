import React from "react";
import "../styles/style.css";

class EducationInfo extends React.Component {
  render() {
    return (
      <div className="education-inputs">
        <div className="input-container">
          <label for="school">School Name</label>
          <input type="text" name="school" id="school"></input>
        </div>
        <div className="input-container">
          <label for="study-title">Study Title</label>
          <input type="text" name="study-title" id="study-title"></input>
        </div>
        <div className="input-container">
          <label for="study-date">Study Date</label>
          <input type="date" name="study-date" id="study-date"></input>
        </div>
      </div>
    );
  }
}

export default EducationInfo;
