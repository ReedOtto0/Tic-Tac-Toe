"use client";
import styles from "./game.module.css";

export const WinOverlay = ({ line, children }) => {
  return (
    <>
      <div className={`${styles.winLine} ${styles[line]}`}></div>
      <div className={`${styles.winOverlay}`}>{children}</div>
    </>
  );
};
