import React, { useState, useEffect } from "react";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [teamState, setTeamState] = useState([
    {
      name: "",
      email: "",
      role: ""
    }
  ]);
  console.log("teamState", teamState);

  const submitHandler = e => {
    e.preventDefault();
    setTeamState();
  };

  const changeHandler = e => {
    setTeamState({
      ...teamState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="App">
      <h1>hello</h1>
      <Form
        teamData={teamState}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
      />
    </div>
  );
}

export default App;
