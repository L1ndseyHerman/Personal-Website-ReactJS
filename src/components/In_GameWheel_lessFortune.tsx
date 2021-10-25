import React, { useState, useRef } from "react";
import classes from "./In_GameWheel_lessFortune.module.css";

type ThisTurnSettings = { wonThisTurn: boolean; lostThisTurn: boolean };

const In_GameWheel_lessFortune: React.FC<{
  clickHandler: ({ wonThisTurn, lostThisTurn }: ThisTurnSettings) => void;
}> = (props) => {
  //  Hard-coding the easy amounts for now:
  const [whatYouSolvedSoFar, setWhatYouSolvedSoFar] = useState("_ _ _ ");
  const [guessesLeft, setGuessesLeft] = useState(12);
  const [inputHasError, setInputHasError] = useState(false);
  const theAnswer = "cat";
  const guessRef = useRef<HTMLInputElement>(null);

  //	Makes sure the input is just one lower-case letter.
  const checkInputForErrors = () => {
    const inputString = guessRef.current!.value;
    //	Makes sure the letter is both the start and the end of the regex, meaning nothing else can be there.
    const regex = /^[a-z]$/;
    const hasOnlyOneLower = inputString.match(regex);
    if (hasOnlyOneLower) {
      setInputHasError(false);
      //checkIfLetterInWord(inputString);
      props.clickHandler({ wonThisTurn: true, lostThisTurn: false });
    } else {
      setInputHasError(true);
    }
  };

  return (
    <>
      <input type="text" ref={guessRef} />
      <button className={classes.button} onClick={checkInputForErrors}>
        Guess A Letter
      </button>
      {inputHasError && <p>Please guess one lower-case letter at a time.</p>}
      <p>{whatYouSolvedSoFar}</p>
      <p>Guesses left: {guessesLeft}</p>
    </>
  );
};

export default In_GameWheel_lessFortune;
