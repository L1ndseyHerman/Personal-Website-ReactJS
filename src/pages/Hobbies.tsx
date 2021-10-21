import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import classes from "./Hobbies.module.css";

const Hobbies: React.FC = () => {
  const [hobby, setHobby] = useState("");

  const selectChangeHandler: (
    event: React.ChangeEvent<{ value: string }>
  ) => void = (event) => {
    setHobby(event.target.value);
  };

  return (
    <div>
      <Wrapper title="Hobbies">
        <select
          id="hobbyChoices"
          className={classes.select}
          onChange={(event: React.ChangeEvent<{ value: string }>) =>
            selectChangeHandler(event)
          }
        >
          <option value="nothing">Hobbies:</option>
          <option value="music">Music</option>
          <option value="creativeWriting">Creative Writing</option>
          <option value="nature">Nature</option>
          <option value="videoGames">Video Games</option>
        </select>
        <div className={classes.imageDiv}>
          <div className={classes.infoDiv}>
            <p>Some text Hobby: {hobby}</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hobbies;
