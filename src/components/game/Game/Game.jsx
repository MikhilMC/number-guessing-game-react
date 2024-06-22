import { useEffect, useState } from "react";
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
import toast from "react-hot-toast";

import styles from "./Game.module.css";

import Card from "../../UI/Card/Card";
import Header1 from "../../UI/Header1/Header1";
import Header2 from "../../UI/Header2/Header2";
import ButtonContainer from "../../UI/ButtonContainer/ButtonContainer";
import Button from "../../UI/Button/Button";
import GuessLogItem from "../GuessLogItem/GuessLogItem";
import { generateRandomBetween } from "../../../utils/helper";

let minBoundary = 1,
  maxBoundary = 100;

function Game({ userChosenNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userChosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(
    function () {
      if (userChosenNumber === currentGuess) {
        toast.success(`Your chosen number is ${currentGuess}`);
        onGameOver(guessRounds.length);
      }
    },
    [currentGuess, userChosenNumber, onGameOver, guessRounds.length]
  );

  useEffect(function () {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    // direction => "lower" / "higher"
    if (
      (direction === "lower" && currentGuess < userChosenNumber) ||
      (direction === "higher" && currentGuess > userChosenNumber)
    ) {
      toast.error("Don't lie. The option you have given is false.");
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newGuess = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newGuess);
    setGuessRounds((prevGuessRounds) => [newGuess, ...prevGuessRounds]);
  }

  return (
    <div className={styles.game}>
      <Card>
        <Header1>Computer's Guess</Header1>
        <Header2>{currentGuess}</Header2>
        <ButtonContainer>
          <Button onClick={nextGuessHandler.bind(this, "lower")}>
            <MdArrowDownward size="2em" />
          </Button>
          <Button onClick={nextGuessHandler.bind(this, "higher")}>
            <MdArrowUpward size="2em" />
          </Button>
        </ButtonContainer>
      </Card>
      <ul className={styles.guessLog}>
        {guessRounds.map((guess, index) => (
          <GuessLogItem
            round={guessRounds.length - index}
            guess={guess}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}

export default Game;
