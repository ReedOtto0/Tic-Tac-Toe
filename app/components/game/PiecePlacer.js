"use client";

import { useDispatch, useSelector } from "react-redux";
import { placePiece } from "../../lib/features/game/gameSlice";
import { DashedO, DashedX } from "../graphics/Pieces";

import styles from "./game.module.css";

const cords = [
  "0, 0",
  "1, 0",
  "2, 0",
  "0, 1",
  "1, 1",
  "2, 1",
  "0, 2",
  "1, 2",
  "2, 2",
];

export const PiecePlacer = ({ square }) => {
  const piece = useSelector((state) => state.game.currentPlayer);
  const playState = useSelector((state) => state.game.playState);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(placePiece(square));
  };
  return (
    <button
      className={styles.piecePlacer}
      aria-label={`Place ${piece} at ${cords[square]}`}
      onClick={clickHandler}
      disabled={playState !== `play`}
    >
      {playState === "play" && piece === "x" ? (
        <DashedX className={styles.dashedPiece} />
      ) : playState === "play" && piece === "o" ? (
        <DashedO className={styles.dashedPiece} />
      ) : (
        <></>
      )}
    </button>
  );
};
