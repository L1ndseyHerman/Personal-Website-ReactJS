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

  let hobbyText = null;
  let backgroundImage = classes.blueDiv;

  if (hobby === "music") {
    hobbyText = <p>Music</p>;
    backgroundImage = classes.musicDiv;
  } else if (hobby === "creativeWriting") {
    hobbyText = <p>Creative Writing</p>;
    backgroundImage = classes.writingDiv;
  } else if (hobby === "nature") {
    hobbyText = <p>Nature</p>;
    backgroundImage = classes.natureDiv;
  } else if (hobby === "videoGames") {
    hobbyText = <p>Video Games</p>;
    backgroundImage = classes.videogameDiv;
  }

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
          <option value="">Hobbies:</option>
          <option value="music">Music</option>
          <option value="creativeWriting">Creative Writing</option>
          <option value="nature">Nature</option>
          <option value="videoGames">Video Games</option>
        </select>
        <div className={`${classes.blueDiv} ${backgroundImage}`}>
          <div className={classes.infoDiv}>{hobbyText}</div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hobbies;
