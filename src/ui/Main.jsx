import { useState } from "react";
import styled, { css } from "styled-components";
import { useSetting } from "../contexts/SettingContext";
import { minimax, isWin } from "../utils/minimax";
import {
  PLAYER1_OR_HUMAN,
  PLAYER2_OR_AI,
  WIN,
  LOSE,
  DRAW,
} from "../utils/constant";
import Box from "./Box";
import Button from "./Button";

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

function Main() {
  const [currentBoard, setCurrentBoard] = useState(
    Array(9)
      .fill()
      .map((_, i) => i)
  );
  const [result, setResult] = useState("");
  const [player, setPlayer] = useState(PLAYER1_OR_HUMAN);
  const { modeAI } = useSetting();

  function checkWinner(board, str1 = WIN, str2 = LOSE) {
    if (!modeAI) {
      str1 = `${PLAYER1_OR_HUMAN} ${WIN}`;
      str2 = `${PLAYER2_OR_AI} ${WIN}`;
    }

    if (isWin(board, PLAYER1_OR_HUMAN)) setResult(str1);
    else if (isWin(board, PLAYER2_OR_AI)) setResult(str2);
    else if (board.every((el) => typeof el !== "number")) setResult(DRAW);
  }

  function handleClickSpot(humanMove) {
    if (typeof currentBoard[humanMove] !== "number") return;

    const tempBoard = currentBoard.slice(0);

    if (modeAI) {
      tempBoard[humanMove] = PLAYER1_OR_HUMAN;

      const { index: aiMove } = minimax(tempBoard);
      tempBoard[aiMove] = PLAYER2_OR_AI;
    } else {
      tempBoard[humanMove] = player;
      setPlayer((player) =>
        player === PLAYER1_OR_HUMAN ? PLAYER2_OR_AI : PLAYER1_OR_HUMAN
      );
    }

    setCurrentBoard(tempBoard);
    checkWinner(tempBoard);
  }

  function handleRestart() {
    setCurrentBoard((arr) => arr.map((_, i) => i));
    setResult(null);
    if (!modeAI) setPlayer(PLAYER1_OR_HUMAN);
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
            result={
              result.includes(WIN)
                ? "win"
                : result.includes(LOSE)
                ? "lose"
                : "draw"
            }
          >
            {result}
          </GameResult>
          <Button onClick={handleRestart}>
            {result.includes(WIN) ? "Play" : "Try"} again
          </Button>
        </>
      )}
    </StyledMain>
  );
}

export default Main;
