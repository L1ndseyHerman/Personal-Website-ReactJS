import React, { useState } from "react";
import EasyMeduimHardButtons from "./EasyMediumHardButtons";
import WinLooseTextButton from "./WinLooseTextButton";

const Wheel_lessFortune: React.FC = () => {
  const [inGame, setInGame] = useState(false);
  const [difficulty, setDifficulty] = useState("");
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);

  const easyMediumHardClickHandler: (thisGamesDifficulty: string) => void = (
    thisGamesDifficulty
  ) => {
    //setInGame(true);
    setDifficulty(thisGamesDifficulty);
    setLost(true);
    console.log(thisGamesDifficulty);
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
