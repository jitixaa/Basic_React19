import { useState } from "react";

export const LifingState = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputComponets inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponets inputValue={inputValue} />
    </>
  );
};

const InputComponets = ({ inputValue, setInputValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Own Value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
    </>
  );
};

const DisplayComponets = ({ inputValue }) => {
  return (
    <>
      <p>This is a Displayed Componets : {inputValue}</p>
    </>
  );
};
