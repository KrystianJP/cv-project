import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import "./styles/style.css";
import Cv from "./components/Cv";

const App = (props) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [schoolName, setSchoolName] = useState(null);
  const [studyTitle, setStudyTitle] = useState(null);
  const [studyDateFrom, setStudyDateFrom] = useState(null);
  const [studyDateTo, setStudyDateTo] = useState(null);
  const [jobs, setJobs] = useState(null);

  function changeValues(value, valueName) {
    eval("set" + valueName + `(${value})`);
  }

  return (
    <div id="content">
      <header className="heading">
        <h1>CV PROJECT</h1>
      </header>
      <Form changeValues={changeValues} />
      <Cv
        values={{
          name,
          email,
          phone,
          schoolName,
          studyTitle,
          studyDateFrom,
          studyDateTo,
          jobs,
        }}
      />
    </div>
  );
};

export default App;
