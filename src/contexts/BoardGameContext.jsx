import { createContext, useContext, useState } from "react";
import { useSetting } from "../contexts/SettingContext";
import { minimax, isWin } from "../utils/minimax";
import {
  PLAYER1_OR_HUMAN,
  PLAYER2_OR_AI,
  WIN,
  LOSE,
  DRAW,
} from "../utils/constant";

const BoardGameContext = createContext();

function BoardGameProvider({ children }) {
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
    <BoardGameContext.Provider
      value={{ currentBoard, result, handleClickSpot, handleRestart }}
    >
      {children}
    </BoardGameContext.Provider>
  );
}

function useBoardGame() {
  const context = useContext(BoardGameContext);
  if (context === undefined)
    throw new Error("BoardGameContext was used outside of BoardGameProvider");

  return context;
}

export { BoardGameProvider, useBoardGame };
