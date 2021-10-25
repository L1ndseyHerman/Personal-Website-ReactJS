import React, { useState } from "react";
import EasyMeduimHardButtons from "./EasyMediumHardButtons";

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

  return (
    <>
      <p>
        Game 3: Wheel-less Fortune. It&apos;s all of the letter-guessing with
        none of the money! Try to guess the word before you run out of guesses.
        Comes in three difficulties, although the hard one might not be as
        difficult as you think....
      </p>
      {!inGame && (
        <EasyMeduimHardButtons clickHandler={easyMediumHardClickHandler} />
      )}
    </>
  );
};

export default Wheel_lessFortune;
