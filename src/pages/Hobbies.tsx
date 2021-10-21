import React from "react";
import Wrapper from "../components/Wrapper";
import classes from "./Hobbies.module.css";

const Hobbies: React.FC = () => {
  return (
    <div>
      <Wrapper title="Hobbies">
        <select id="hobbyChoices" className={classes.select}>
          <option>Hobbies:</option>
          <option value="music">Music</option>
          <option value="creativeWriting">Creative Writing</option>
          <option value="nature">Nature</option>
          <option value="videoGames">Video Games</option>
        </select>
        <div className={classes.imageDiv}>
          <div className={classes.infoDiv}></div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hobbies;
