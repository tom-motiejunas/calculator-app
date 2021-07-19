import React, { useEffect, useState } from "react";

import Screen from "./components/screen/screen.component";
import Interface from "./components/interface/interface.component";

import "./App.css";

function App() {
  const [screenValue, setScreenValue] = useState(0);

  return (
    <div className="App">
      <Screen screenValue={screenValue}></Screen>
      <Interface
        screenValue={screenValue}
        setScreenValue={setScreenValue}
      ></Interface>
    </div>
  );
}

export default App;
