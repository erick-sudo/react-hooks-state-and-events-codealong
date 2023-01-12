import React, {useState} from "react";

function Toggle() {

  const [isOn, setIsOn] = useState(false)

  function handleClick() {
    setIsOn(isOn => !isOn)
  }

  const color = isOn ? "burlywood" : "purple"

  document.body.style.backgroundColor = color

  return <button onClick={handleClick}>{ isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
