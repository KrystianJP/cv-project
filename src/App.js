import React from "react";
import Form from "./components/Form";
import "./styles/style.css";
import Cv from "./components/Cv";

class App extends React.Component {
  render() {
    return (
      <div id="content">
        <header className="heading">CV Project</header>
        <Form />
        <Cv />
      </div>
    );
  }
}

export default App;
