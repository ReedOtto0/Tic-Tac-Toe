import { createSlice } from "@reduxjs/toolkit";

const blankBoard = new Array(9).fill("");

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const winConditions = [
  "row0",
  "row1",
  "row2",
  "col0",
  "col1",
  "col2",
  "diaL",
  "diaR",
];

function checkForWin(board) {
  let winner = "",
    winCondition = {};

  winningLines.forEach((line, i) => {
    if (
      board[line[0]] !== "" &&
      board[line[0]] === board[line[1]] &&
      board[line[1]] === board[line[2]]
    ) {
      winner = board[line[0]];
      winCondition = winConditions[i];
    }
  });

  return winner !== "" ? { winner: winner, winCondition: winCondition } : false;
}

export const gameSlice = createSlice({
  name: "counter",
  initialState: {
    board: [...blankBoard],
    history: [],
    turn: 0,
    wins: {
      x: 0,
      o: 0,
    },
    currentPlayer: "x",
    initialPlayer: "x",
    computer: false,
    playState: "play",
    winCondition: { type: "" },
  },
  reducers: {
    placePiece: (state, action) => {
      state.history.push(state.board);
      state.board[action.payload] = state.currentPlayer;

      const gameIsWon = checkForWin(state.board);

      if (gameIsWon !== false) {
        state.wins[gameIsWon.winner]++;
        state.winCondition = gameIsWon.winCondition;
        state.playState = "over";
      } else {
        state.currentPlayer = state.currentPlayer === "x" ? "o" : "x";
        state.turn++;
      }
    },
    setPlayer: (state, action) => {
      state.initialPlayer = action.payload.player;
      state.currentPlayer = state.initialPlayer;
      state.playState = "play";
    },
    resetGame: (state) => {
      state.board = [...blankBoard];
      state.currentPlayer = state.initialPlayer;
      state.history = [];
      state.turn = 0;
      state.playState = "play";
    },
  },
});

export const { placePiece, setPlayer, resetGame } = gameSlice.actions;

export default gameSlice.reducer;
