import React from "react";
import classes from "./OneJSSkillGameWrapper.module.css";

const OneJSSkillGame: React.FC = (props) => {
  return (
    <div className={classes.blueDiv}>
      <div className={classes.infoDiv}>{props.children}</div>
    </div>
  );
};

export default OneJSSkillGame;
