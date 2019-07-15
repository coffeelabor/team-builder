import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [teamState, setTeamState] = useState({
    squirrel: "",
    owl: "",
    mole: ""
  });
  // console.log("teamState", teamState);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
