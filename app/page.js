import Board from "./components/game/Board";
import GameStoreProvider from "./components/GameStoreProvider";
import { ResetButton } from "./components/controls/Buttons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <GameStoreProvider>
        <Board />
        <ResetButton />
      </GameStoreProvider>
    </main>
  );
}
