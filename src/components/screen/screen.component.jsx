import React from "react";

import "./screen.style.css";

function Screen({ screenValue }) {
  return (
    <header className="screen">
      <h1>{screenValue}</h1>
    </header>
  );
}

export default Screen;
