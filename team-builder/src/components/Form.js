import React from "react";

const Form = props => {
  console.log("form props", props);
  return (
    <div>
      <form onSubmit={props.submitHandler}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            placeholder="name"
            onChange={props.changeHandler}
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            type="text"
            placeholder="email"
            onChange={props.changeHandler}
          />
        </label>
        <label>
          Role:
          <input
            name="role"
            type="text"
            placeholder="role"
            onChange={props.changeHandler}
          />
        </label>
        <button>push it</button>
      </form>
    </div>
  );
};

export default Form;
