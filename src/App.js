import React from "react";
import Form from "./components/Form";
import "./styles/style.css";
import Cv from "./components/Cv";

class App extends React.Component {
  render() {
    return (
      <div id="content">
        <header className="heading">
          <h1>CV PROJECT</h1>
        </header>
        <Form />
        <Cv />
      </div>
    );
  }
}

export default App;
