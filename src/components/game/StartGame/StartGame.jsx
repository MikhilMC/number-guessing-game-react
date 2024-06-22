import { useState } from "react";
import styles from "./StartGame.module.css";
import Button from "../../UI/Button/Button";
import ButtonContainer from "../../UI/ButtonContainer/ButtonContainer";
import Card from "../../UI/Card/Card";
import Header1 from "../../UI/Header1/Header1";

function StartGame({ onSelectNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberClearHandler() {
    setEnteredNumber("");
  }

  function numberChooseHandler() {
    onSelectNumber(enteredNumber);
    setEnteredNumber("");
  }

  return (
    <Card>
      <Header1>Guess My Number</Header1>
      <label className={styles.label} htmlFor="chosenNumber">
        Enter a number between 1 and 99
      </label>
      <input
        className={styles.input}
        id="chosenNumber"
        type="number"
        min={1}
        max={99}
        value={enteredNumber}
        onChange={(e) => setEnteredNumber(e.target.value)}
      />
      <ButtonContainer>
        <Button onClick={numberClearHandler}>Cancel</Button>
        <Button onClick={numberChooseHandler}>Select</Button>
      </ButtonContainer>
    </Card>
  );
}

export default StartGame;
