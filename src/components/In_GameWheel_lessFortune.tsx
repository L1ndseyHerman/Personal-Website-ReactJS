import React from "react";
import classes from "./In_GameWheel_lessFortune.module.css";

type ThisTurnSettings = { wonThisTurn: boolean; lostThisTurn: boolean };

const In_GameWheel_lessFortune: React.FC<{
  clickHandler: ({ wonThisTurn, lostThisTurn }: ThisTurnSettings) => void;
}> = (props) => {
  return (
    <>
      <button
        className={classes.button}
        onClick={() =>
          props.clickHandler({ wonThisTurn: true, lostThisTurn: false })
        }
      >
        A Button
      </button>
      <p>Some blanks</p>
    </>
  );
};

export default In_GameWheel_lessFortune;
