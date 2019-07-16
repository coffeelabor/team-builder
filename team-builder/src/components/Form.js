import React, { useEffect } from "react";
import { useForm } from "./useForm";

const Form = props => {
  const [state, changeHandler, submitHandler, setState] = useForm(
    {
      name: "",
      email: "",
      role: ""
    },
    handleTeam
  );

  function handleTeam() {
    if (!props.isEditing) {
      const id = props.teamData[props.teamData.length - 1].id + 1;
      props.setTeamData([...props.teamData, { id, ...state }]);
    } else {
      const filteredTeam = props.teamData.filter(
        person => person.id !== state.id
      );
      props.setTeamData([...filteredTeam, state]);
      props.setIsEditing(false);
    }
  }

  useEffect(() => {
    return props.editTeamState && setState(props.editTeamState);
  }, [props.editTeamState]);

  //   console.log("form props", props);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            placeholder="name"
            value={state.name}
            onChange={changeHandler}
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            type="text"
            placeholder="email"
            value={state.email}
            onChange={changeHandler}
          />
        </label>
        <label>
          Role:
          <input
            name="role"
            type="text"
            placeholder="role"
            value={state.role}
            onChange={changeHandler}
          />
        </label>
        <button> {props.isEditing ? "edit it" : "Add another one"} </button>
      </form>
    </div>
  );
};

export default Form;
