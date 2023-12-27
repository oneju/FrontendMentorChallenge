import { useState } from "react";
import Keypad from "./keypad";
import ValueBox from "./valueBox";
import styled from "styled-components";
const Calculator = () => {
  const [display, setDisplay] = useState("");

  const calc = (e) => {
    const input = e.target.value;

    if (input === "=") {
      const res = eval(display);
      setDisplay(res);
    } else if (input === "reset") {
      setDisplay("");
    } else if (input === "del") {
      setDisplay((prev) => prev.slice(0, prev.length - 1));
    } else {
      setDisplay((prev) => prev + input);
    }
  };
  return (
    <CalcContainer>
      <ValueBox display={display} />
      <Keypad calc={(e) => calc(e)} />
    </CalcContainer>
  );
};
export default Calculator;
const CalcContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
