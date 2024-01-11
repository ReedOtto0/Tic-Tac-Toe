import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./features/game/gameSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { game: gameReducer },
  });
};
