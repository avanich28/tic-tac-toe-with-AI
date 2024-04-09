import { PLAYER1_OR_HUMAN, PLAYER2_OR_AI } from "./constant";

function emptySpots(board) {
  return board.filter((el) => el !== "x" && el !== "o");
}

export function isWin(board, player) {
  if (
    (board[0] === player && board[1] === player && board[2] === player) ||
    (board[3] === player && board[4] === player && board[5] === player) ||
    (board[6] === player && board[7] === player && board[8] === player) ||
    (board[0] === player && board[3] === player && board[6] === player) ||
    (board[1] === player && board[4] === player && board[7] === player) ||
    (board[2] === player && board[5] === player && board[8] === player) ||
    (board[0] === player && board[4] === player && board[8] === player) ||
    (board[2] === player && board[4] === player && board[6] === player)
  )
    return true;

  return false;
}

export function minimax(board, player = PLAYER2_OR_AI) {
  const availableSpots = emptySpots(board);

  if (isWin(board, PLAYER1_OR_HUMAN)) return { score: -10 };
  else if (isWin(board, PLAYER2_OR_AI)) return { score: 10 };
  else if (availableSpots.length === 0) return { score: 0 };

  const moves = [];
  // Store result in each available spot
  for (let i = 0; i < availableSpots.length; i++) {
    const move = {};
    // Temp
    move.index = board[availableSpots[i]];

    // Change
    board[availableSpots[i]] = player;

    // Switch player
    if (player === PLAYER2_OR_AI) {
      const result = minimax(board, PLAYER1_OR_HUMAN);
      move.score = result.score;
    } else {
      const result = minimax(board, PLAYER2_OR_AI);
      move.score = result.score;
    }

    // Reset to Temp
    board[availableSpots[i]] = move.index;

    // Store index + score
    moves.push(move);
  }

  let bestMove;
  if (player === PLAYER2_OR_AI) {
    // Worst case
    let bestScore = -10000;

    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = 10000;

    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove]; // index
}
