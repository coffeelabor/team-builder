import React from "react";

const Team = props => {
  console.log("team props", props);
  const editPerson = () => {
    props.setIsEditing(true);
    props.setEditTeamState(props);
  };
  return (
    <div>
      <hr />
      <li>Name: {props.person.name}</li>
      <li>Email: {props.person.email}</li>
      <li>Role: {props.person.role}</li>
      <button onClick={editPerson}>Change it</button>
      <hr />
    </div>
  );
};

export default Team;
