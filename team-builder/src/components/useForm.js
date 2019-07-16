import { useState } from "react";

export function useForm(initialState, cb) {
  const [state, setState] = useState(initialState);

  function changeHandler(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    cb();
    setState(initialState);
  }

  return [state, changeHandler, submitHandler, setState];
}
