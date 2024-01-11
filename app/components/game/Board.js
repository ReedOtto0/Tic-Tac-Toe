"use client";

import { PiecePlacer } from "./PiecePlacer";
import { useSelector } from "react-redux";
import { XPiece, OPiece } from "../graphics/Pieces";

import styles from "./game.module.css";
import { WinOverlay } from "./WinOverlay";

export default function Board() {
  const playState = useSelector((state) => state.game.playState);
  const boardState = useSelector((state) => state.game.board);
  const winCondition = useSelector((state) => state.game.winCondition);

  const pieces = boardState.map((piece, square) => (
    <Square
      piece={piece}
      square={square}
      key={square}
      className={styles.solidPiece}
    />
  ));

  return (
    <div className={styles.board}>
      {pieces}
      {playState === "over" && <WinOverlay line={winCondition} />}
    </div>
  );
}

const Square = ({ piece, square }) => {
  return (
    <div className={styles.square}>
      {piece === "x" ? (
        <XPiece square={square} />
      ) : piece === "o" ? (
        <OPiece square={square} />
      ) : (
        <PiecePlacer square={square} />
      )}
    </div>
  );
};
