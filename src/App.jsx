import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import StartGame from "./components/game/StartGame/StartGame";
import Game from "./components/game/Game/Game";
import GameOver from "./components/game/GameOver/GameOver";

function App() {
  const [chosenNumber, setChosenNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [numGuesses, setNumGuesses] = useState(0);

  function numberSelectHandler(num) {
    if (num.length === 0) {
      toast.error("Please enter number");
      return;
    }

    const userNumber = Number(num);
    if (userNumber < 1 || userNumber > 99) {
      toast.error("Please enter any number between 1 and 99");
      return;
    }

    setChosenNumber(userNumber);
    setIsGameOver(false);
  }

  function gameOverHandler(guesses) {
    setIsGameOver(true);
    setNumGuesses(guesses);
  }

  function startNewGameHandler() {
    setChosenNumber(null);
    setNumGuesses(0);
  }

  // console.log(chosenNumber);
  let currentWindow = <StartGame onSelectNumber={numberSelectHandler} />;

  if (chosenNumber) {
    currentWindow = (
      <Game userChosenNumber={chosenNumber} onGameOver={gameOverHandler} />
    );
  }

  if (chosenNumber && isGameOver) {
    currentWindow = (
      <GameOver
        chosenNumber={chosenNumber}
        guessRounds={numGuesses}
        onNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <div>
      {currentWindow}
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "8px",
          fontFamily: "Open-Sans, sans-serif",
          fontWeight: "bold",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--darkerShade)",
            color: "var(--lighterColor)",
          },
        }}
      />
    </div>
  );
}

export default App;
