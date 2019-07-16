import React from "react";
import Team from "./Team";

const TeamList = props => {
  console.log("teamlist", props);
  return (
    <div>
      <h1>hi</h1>
      {props.teamMembers.map(person => (
        <Team
          key={person.id}
          person={person}
          setEditTeamState={props.setEditTeamState}
          setIsEditing={props.setIsEditing}
        />
      ))}
    </div>
  );
};

export default TeamList;
