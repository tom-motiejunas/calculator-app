import React, { useEffect, useState } from "react";

import "./interface.style.css";

function getAns(firstValue, action, secondValue) {
  const answer = eval(`${firstValue} ${action} ${secondValue}`);
  return answer;
}

function calc(
  e,
  screenValue,
  setScreenValue,
  firstValue,
  setFirstValue,
  secondValue,
  setSecondValue,
  action,
  setAction
) {
  const btnValue = e.target.value;
  // If user pressed number btn
  if (Number.isInteger(Number(btnValue)) && action === null) {
    const newValue = screenValue * 10 + Number(btnValue);
    setFirstValue(newValue);
    setScreenValue(newValue);
  } else if (Number.isInteger(Number(btnValue)) && action !== null) {
    const newValue = secondValue * 10 + Number(btnValue);
    setSecondValue(newValue);
    setScreenValue(newValue);
  }
  // If user pressed action btn
  else {
    switch (btnValue) {
      case "C":
        setScreenValue(0);
        setFirstValue(0);
        setAction(null);
        break;
      case "=":
        if (action === null) break;
        const answer = getAns(firstValue, action, secondValue);
        setScreenValue(answer);
        setFirstValue(answer);
        break;
      case "%":
        if (secondValue) {
          const answer = getAns(firstValue / 100, "*", secondValue);
          setSecondValue(0);
          setFirstValue(answer);
          setScreenValue(answer);
          setAction("*");
          break;
        }
        setScreenValue(0);
        setFirstValue(firstValue / 100);
        setAction("*");
        break;
      //If arithmetic action
      default:
        if (secondValue) {
          if (action === null) break;
          const answer = getAns(firstValue, action, secondValue);
          setSecondValue(0);
          setFirstValue(answer);
          setScreenValue(answer);
          setAction(btnValue);
          break;
        }
        setScreenValue(0);
        setAction(btnValue);
        break;
    }
  }
}

function Interface({ screenValue, setScreenValue }) {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [action, setAction] = useState(null);
  const states = [
    screenValue,
    setScreenValue,
    firstValue,
    setFirstValue,
    secondValue,
    setSecondValue,
    action,
    setAction,
  ];
  return (
    <div className="container">
      <div className="row">
        <button
          onClick={(e) => calc(e, ...states)}
          className="btn colored"
          value="C"
        >
          C
        </button>
        <button
          onClick={(e) => calc(e, ...states)}
          className="btn colored"
          value="%"
        >
          %
        </button>
      </div>
      <div className="row">
        <button onClick={(e) => calc(e, ...states)} className="btn" value="7">
          7
        </button>
        <button onClick={(e) => calc(e, ...states)} className="btn" value="8">
          8
        </button>
        <button onClick={(e) => calc(e, ...states)} className="btn" value="9">
          9
        </button>
        <button
          onClick={(e) => calc(e, ...states)}
          className="btn colored"
          value="*"
        >
          x
        </button>
      </div>
      <div className="row">
        <button onClick={(e) => calc(e, ...states)} className="btn" value="4">
          4
        </button>
        <button onClick={(e) => calc(e, ...states)} className="btn" value="5">
          5
        </button>
        <button onClick={(e) => calc(e, ...states)} className="btn" value="6">
          6
        </button>
        <button
          onClick={(e) => calc(e, ...states)}
          className="btn colored"
          value="/"
        >
          ÷
        </button>
      </div>
      <div className="row">
        <button onClick={(e) => calc(e, ...states)} className="btn" value="1">
          1
        </button>
        <button onClick={(e) => calc(e, ...states)} className="btn" value="2">
          2
        </button>
        <button onClick={(e) => calc(e, ...states)} className="btn" value="3">
          3
        </button>
        <button
          onClick={(e) => calc(e, ...states)}
          className="btn colored"
          value="+"
        >
          +
        </button>
      </div>
      <div className="row">
        <button onClick={(e) => calc(e, ...states)} className="btn" value=".">
          .
        </button>
        <button onClick={(e) => calc(e, ...states)} className="btn" value="0">
          0
        </button>
        <button onClick={(e) => calc(e, ...states)} className="btn" value="=">
          =
        </button>
        <button
          onClick={(e) => calc(e, ...states)}
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
