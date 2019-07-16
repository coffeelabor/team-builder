import { useState } from "react";

export function useForm(intialState, cb) {
  const [state, setState] = useState(intialState);

  function changeHandler(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    cb();
    setState(intialState);
  }

  return [state, changeHandler, submitHandler, setState];
}
