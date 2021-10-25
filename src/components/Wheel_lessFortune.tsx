import React, { useState } from "react";
import EasyMeduimHardButtons from "./EasyMediumHardButtons";
import In_GameWheel_lessFortune from "./In_GameWheel_lessFortune";
import WinLooseTextButton from "./WinLooseTextButton";

const Wheel_lessFortune: React.FC = () => {
  const [inGame, setInGame] = useState(false);
  const [difficulty, setDifficulty] = useState("");
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);

  const easyMediumHardClickHandler: (thisGamesDifficulty: string) => void = (
    thisGamesDifficulty
  ) => {
    setInGame(true);
    setDifficulty(thisGamesDifficulty);
    console.log(thisGamesDifficulty);
  };

  type ThisTurnSettings = { wonThisTurn: boolean; lostThisTurn: boolean };

  const thisTurnClickHandler: ({
    wonThisTurn,
    lostThisTurn,
  }: ThisTurnSettings) => void = ({ wonThisTurn, lostThisTurn }) => {
    setWon(wonThisTurn);
    setLost(lostThisTurn);

    //  This has to be wonThisTurn not won, bec the if-statement isn't caught up to
    //  the batch update!
    if (wonThisTurn || lostThisTurn) {
      setInGame(false);
    }
  };

  const playAgainClickHandler: () => void = () => {
    setWon(false);
    setLost(false);
  };

  return (
    <>
      <p>
        Game 3: Wheel-less Fortune. It&apos;s all of the letter-guessing with
        none of the money! Try to guess the word before you run out of guesses.
        Comes in three difficulties, although the hard one might not be as
        difficult as you think....
      </p>
      {!inGame && !lost && !won && (
        <EasyMeduimHardButtons clickHandler={easyMediumHardClickHandler} />
      )}
      {inGame && difficulty === "easy" && (
        <In_GameWheel_lessFortune
          clickHandler={thisTurnClickHandler}
          theAnswer="cat"
          numGuesses={12}
          blanksString="_ _ _ "
        />
      )}
      {inGame && difficulty === "medium" && (
        <In_GameWheel_lessFortune
          clickHandler={thisTurnClickHandler}
          theAnswer="jogging"
          numGuesses={14}
          blanksString="_ _ _ _ _ _ _ "
        />
      )}
      {inGame && difficulty === "hard" && (
        <In_GameWheel_lessFortune
          clickHandler={thisTurnClickHandler}
          theAnswer="coronavirus"
          numGuesses={11}
          blanksString="_ _ _ _ _ _ _ _ _ _ _ "
        />
      )}
      {!inGame && lost && (
        <WinLooseTextButton
          winLooseText="lost."
          clickHandler={playAgainClickHandler}
        />
      )}
      {!inGame && won && (
        <WinLooseTextButton
          winLooseText="won!"
          clickHandler={playAgainClickHandler}
        />
      )}
    </>
  );
};

export default Wheel_lessFortune;
