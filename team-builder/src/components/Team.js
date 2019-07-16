import React from "react";

const Team = props => {
  console.log("team props", props);
  return (
    <div>
      <hr />
      <li>Name: {props.person.name}</li>
      <li>Email: {props.person.email}</li>
      <li>Role: {props.person.role}</li>
      <hr />
    </div>
  );
};

export default Team;
