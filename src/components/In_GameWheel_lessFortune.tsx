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

  const checkInputForOneLowercaseLetter = () => {
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
      <input type="text" ref={guessRef} className={classes.input} />
      <button
        className={classes.button}
        onClick={checkInputForOneLowercaseLetter}
      >
        Guess A Letter
      </button>
      <button className={classes.buttonRight}>Solve the Puzzle</button>
      <input type="text" className={classes.inputRight} />
      {inputHasError && (
        <p className={classes.par}>
          Please guess one lower-case letter at a time.
        </p>
      )}
      <p className={classes.par}>{whatYouSolvedSoFar}</p>
      <p className={classes.par}>Guesses left: {guessesLeft}</p>
    </>
  );
};

export default In_GameWheel_lessFortune;
