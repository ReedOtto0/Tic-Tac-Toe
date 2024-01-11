"use client";

import { useDispatch } from "react-redux";
import { resetGame } from "@/app/lib/features/game/gameSlice";

export const Button = ({ label, action }) => {
  return (
    <button className="" onClick={action}>
      {label}
    </button>
  );
};

export const ResetButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(resetGame());
  };
  return <Button label="Reset" action={handleClick} />;
};
