import { useState } from "react";
import { IoIosSwitch } from "react-icons/io";
import "./ToggleButton.css";
export const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);
  const handleToggleButton = () => {
    setIsOn(!isOn);
  };
  const CheckToggleButton = isOn ? "on" : "off";
  const ToggleBgColor = { backgroundColor: isOn ? "#4caf50" : "#f44336" };
  return (
    <>
      <IoIosSwitch
        fontSize={"100px"}
        onClick={handleToggleButton}
        color={ToggleBgColor}
      />

      <div
        className="toggle-switch"
        onClick={handleToggleButton}
        style={ToggleBgColor}
      >
        <div className={`switch ${CheckToggleButton}`}>
          <span className="switch-state">{CheckToggleButton}</span>
        </div>
      </div>
    </>
  );
};
