import styled, { css } from "styled-components";
import { useBoardGame } from "../contexts/BoardGameContext";
import { WIN, LOSE } from "../utils/constant";
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
  const { currentBoard, result, handleClickSpot, handleRestart } =
    useBoardGame();

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
