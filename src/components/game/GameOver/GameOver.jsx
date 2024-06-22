import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Header1 from "../../UI/Header1/Header1";

import styles from "./GameOver.module.css";

function GameOver({ chosenNumber, guessRounds, onNewGame }) {
  return (
    <Card>
      <Header1>GAME OVER!</Header1>
      <p className={styles.summary}>
        It took <span>{guessRounds}</span> rounds to guess the number{" "}
        <span>{chosenNumber}</span>
      </p>
      <Button onClick={onNewGame}>Start a New Game</Button>
    </Card>
  );
}

export default GameOver;
