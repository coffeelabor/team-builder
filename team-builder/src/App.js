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

  const [isEditing, setIsEditing] = useState(false);
  const [editTeamState, setEditTeamState] = useState();

  return (
    <div className="App">
      <h1>hello</h1>
      <TeamList
        teamMembers={teamState}
        setEditTeamState={setEditTeamState}
        setIsEditing={setIsEditing}
      />
      <Form
        teamData={teamState}
        setTeamData={setTeamState}
        editTeamState={editTeamState}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        // submitHandler={submitHandler}
        // changeHandler={changeHandler}
      />
    </div>
  );
}

export default App;
