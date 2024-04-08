import { useState } from "react";
import styled from "styled-components";
import Box from "./Box";
import Button from "./Button";
import { HUMAN, AI, minimax } from "../utils/minimax";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const BoardGame = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 310px;
  gap: 5px;
`;

function Main() {
  const [currentBoard, setCurrentBoard] = useState(
    Array(9)
      .fill()
      .map((_, i) => i)
  );

  function handleClickSpot(humanMove) {
    if (typeof currentBoard[humanMove] === "number") {
      const tempBoard = currentBoard.slice(0);
      tempBoard[humanMove] = HUMAN;

      const { index: aiMove } = minimax(tempBoard);
      tempBoard[aiMove] = AI;

      setCurrentBoard(tempBoard);
    }
  }

  function handleRestart() {
    setCurrentBoard((arr) => arr.map((_, i) => i));
  }

  return (
    <StyledMain>
      <BoardGame>
        {Array(9)
          .fill("")
          .map((_, i) => (
            <Box
              key={i}
              num={i}
              player={currentBoard[i]}
              onSpot={handleClickSpot}
            />
          ))}
      </BoardGame>

      <Button onClick={handleRestart}>Restart</Button>
    </StyledMain>
  );
}

export default Main;
