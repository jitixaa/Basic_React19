import { useState } from "react";
import styled from "styled-components";

export const ChaiCode = () => {
  let [counter, setCounter] = useState(0);
  const AddValue = () => {
    setCounter(counter + 1);
  };
  const RemoveValue = () => {
    setCounter(counter - 1);
  };
  return (
    <Div>
      <h1>{counter}</h1>
      <Button onClick={AddValue}>Add Value</Button>
      <Button onClick={RemoveValue}>Remove Value</Button>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-weight: 600;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
