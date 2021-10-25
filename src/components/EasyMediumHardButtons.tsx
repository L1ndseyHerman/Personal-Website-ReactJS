import React from "react";
import classes from "./EasyMediumHardButtons.module.css";

const EasyMeduimHardButtons: React.FC<{
  clickHandler: (thisGamesDifficulty: string) => void;
}> = (props) => {
  return (
    <>
      <button
        className={classes.button}
        onClick={() => props.clickHandler("easy")}
      >
        Easy
      </button>
      <button
        className={classes.button}
        onClick={() => props.clickHandler("medium")}
      >
        Medium
      </button>
      <button
        className={classes.button}
        onClick={() => props.clickHandler("hard")}
      >
        Hard
      </button>
    </>
  );
};

export default EasyMeduimHardButtons;
