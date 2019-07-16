import React, { useState } from "react";
import Form from "./components/Form";
import TeamList from "./components/TeamList";

import "./App.css";

function App() {
  const [teamState, setTeamState] = useState([
    {
      id: 1,
      name: "reed",
      email: "reed@reed.com",
      role: "Front-end Developer"
    },
    {
      id: 2,
      name: "notReed",
      email: "notReed@notReed.com",
      role: "back-end Developer"
    }
  ]);

  console.log("teamState", teamState);

  // const submitHandler = e => {
  //   e.preventDefault();
  //   setTeamState();
  // };

  // const changeHandler = e => {
  //   setTeamState({
  //     ...teamState,
  //     [e.target.name]: e.target.value
  //   });
  // };

  return (
    <div className="App">
      <h1>hello</h1>
      <TeamList teamMembers={teamState} />
      <Form
        teamData={teamState}
        setTeamData={setTeamState}
        // submitHandler={submitHandler}
        // changeHandler={changeHandler}
      />
    </div>
  );
}

export default App;
