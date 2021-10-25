import React from "react";
import classes from "./WinLooseTextButton.module.css";

const WinLooseTextButton: React.FC<{
  winLooseText: string;
  clickHandler: () => void;
}> = (props) => {
  return (
    <>
      <p className={classes.par}>You {props.winLooseText} Play again?</p>
      <button className={classes.button} onClick={() => props.clickHandler()}>
        Play Again
      </button>
    </>
  );
};

export default WinLooseTextButton;
