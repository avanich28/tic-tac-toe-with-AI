import { useState } from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: var(--color-green);
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: 75px;
  animation: expand 1.2s forwards;
`;

const Symbol = styled.span`
  animation: expand 2s forwards;
`;

function Box({ num }) {
  const [choice, setChoice] = useState(null);

  function handleClickChoice(player = "o") {
    setChoice(player);
  }

  function clearBox() {
    setChoice("");
  }

  return (
    <StyledBox
      style={
        choice === "x"
          ? { color: "var(--color-yellow)" }
          : { color: "var(--color-red)" }
      }
      onClick={() => handleClickChoice("x")}
    >
      <Symbol>{choice}</Symbol>
    </StyledBox>
  );
}

export default Box;
