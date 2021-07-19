import React, { useEffect } from "react";

import "./interface.style.css";

function calc(e, screenValue, setScreenValue) {
  const action = e.target.value;
  // If user pressed number btn
  if (Number.isInteger(Number(action))) {
    const newValue = screenValue * 10 + Number(action);
    setScreenValue(newValue);
  }
}

function Interface({ screenValue, setScreenValue }) {
  return (
    <div className="container">
      <div className="row">
        <button
          onClick={(e) => calc(e, screenValue, setScreenValue)}
          className="btn colored"
          value="C"
        >
          C
        </button>
        <button
          onClick={(e) => calc(e, screenValue, setScreenValue)}
          className="btn colored"
          value="%"
        >
          %
        </button>
      </div>
      <div className="row">
        <button
          onClick={(e) => calc(e, screenValue, setScreenValue)}
          className="btn"
          value="7"
        >
          7
        </button>
        <button
          onClick={(e) => calc(e, screenValue, setScreenValue)}
          className="btn"
          value="8"
        >
          8
        </button>
        <button
          onClick={(e) => calc(e, screenValue, setScreenValue)}
          className="btn"
          value="9"
        >
          9
        </button>
        <button
          onClick={(e) => calc(e, screenValue, setScreenValue)}
          className="btn colored"
          value="x"
        >
          x
        </button>
      </div>
      <div className="row">
        <button
          onClick={(e) => calc(e, screenValue, setScreenValue)}
          className="btn"
          value="4"
        >
          4
        </button>
        <button
          onClick={(e) => calc(e, screenValue, setScreenValue)}
          className="btn"
          value="5"
        >
          5
        </button>
        <button
          onClick={(e) => calc(e, screenValue, setScreenValue)}
          className="btn"
          value="6"
        >
          6
        </button>
        <button
          onClick={(e) => calc(e, screenValue, setScreenValue)}
          className="btn colored"
          value="÷"
        >
          ÷
        </button>
      </div>
      <div className="row">
        <button
          onClick={(e) => calc(e, screenValue, setScreenValue)}
          className="btn"
          value="1"
        >
          1
        </button>
        <button
          onClick={(e) => calc(e, screenValue, setScreenValue)}
          className="btn"
          value="2"
        >
          2
        </button>
        <button
          onClick={(e) => calc(e, screenValue, setScreenValue)}
          className="btn"
          value="3"
        >
          3
        </button>
        <button
          onClick={(e) => calc(e, screenValue, setScreenValue)}
          className="btn colored"
          value="+"
        >
          +
        </button>
      </div>
      <div className="row">
        <button
          onClick={(e) => calc(e, screenValue, setScreenValue)}
          className="btn"
          value="."
        >
          .
        </button>
        <button
          onClick={(e) => calc(e, screenValue, setScreenValue)}
          className="btn"
          value="0"
        >
          0
        </button>
        <button
          onClick={(e) => calc(e, screenValue, setScreenValue)}
          className="btn"
          value="="
        >
          =
        </button>
        <button
          onClick={(e) => calc(e, screenValue, setScreenValue)}
          className="btn colored"
          value="-"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Interface;
