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
      checkIfLetterInWord(inputString);
    } else {
      setInputHasError(true);
    }
  };

  const checkIfLetterInWord = (inputString: string) => {
    for (let index = 0; index < theAnswer.length; index++) {
      //  Remember, the inputString should only ever be one letter:
      if (theAnswer[index] === inputString[0]) {
        //foundArray[index] = theAnswer[index];
        props.clickHandler({ wonThisTurn: true, lostThisTurn: false });
      }
    }

    //	/2 bec gap between each blank
    //createBlankArray(blanksOutsideFunction.length/2);

    setGuessesLeft((prevNumberOfGuesses) => {
      //  This if-check needs to be here bec will be 1 behind in a seperate function
      //  due to batch updates!
      if (prevNumberOfGuesses === 1) {
        props.clickHandler({ wonThisTurn: false, lostThisTurn: true });
      }
      return prevNumberOfGuesses - 1;
    });

    //checkWin();
    //checkLoose();

    guessRef.current!.value = "";
  };

  /*const checkLoose = () => {
    if (guessesLeft <= 0) {
      props.clickHandler({ wonThisTurn: false, lostThisTurn: true });
    }
  };*/

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
