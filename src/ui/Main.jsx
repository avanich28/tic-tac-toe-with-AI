import { useState } from "react";
import styled, { css } from "styled-components";
import Box from "./Box";
import Button from "./Button";
import { HUMAN, AI, minimax, isWin } from "../utils/minimax";

const results = {
  win: css`
    color: var(--color-yellow);
  `,
  lose: css`
    color: var(--color-red);
  `,
  draw: css`
    color: var(--color-purple);
  `,
};

const StyledMain = styled.div`
  min-height: 367px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const BoardGame = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 310px;
  gap: 5px;
`;

const GameResult = styled.p`
  margin-bottom: 10px;
  font-size: 50px;
  font-weight: bold;
  text-transform: capitalize;
  animation: expand 0.5s forwards;

  ${(props) => results[props.result]}
`;

const WIN = "Win : )";
const LOSE = "Lose : (";
const DRAW = "Draw!";

function Main() {
  const [currentBoard, setCurrentBoard] = useState(
    Array(9)
      .fill()
      .map((_, i) => i)
  );
  const [result, setResult] = useState(null);

  function handleClickSpot(humanMove) {
    if (typeof currentBoard[humanMove] === "number") {
      const tempBoard = currentBoard.slice(0);
      tempBoard[humanMove] = HUMAN;

      const { index: aiMove } = minimax(tempBoard);
      tempBoard[aiMove] = AI;

      setCurrentBoard(tempBoard);

      if (isWin(tempBoard, HUMAN)) setResult(WIN);
      else if (isWin(tempBoard, AI)) setResult(LOSE);
      else if (tempBoard.every((el) => typeof el !== "number")) setResult(DRAW);
    }
  }

  function handleRestart() {
    setCurrentBoard((arr) => arr.map((_, i) => i));
    setResult(null);
  }

  return (
    <StyledMain>
      {!result ? (
        <>
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
        </>
      ) : (
        <>
          <GameResult
            result={result === WIN ? "win" : result === LOSE ? "lose" : "draw"}
          >
            {result}
          </GameResult>
          <Button onClick={handleRestart}>
            {result === WIN ? "Play again" : "Try again"}
          </Button>
        </>
      )}
    </StyledMain>
  );
}

export default Main;
