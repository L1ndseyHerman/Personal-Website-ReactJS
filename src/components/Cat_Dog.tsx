import React, { useState } from "react";
import classes from "./Cat_Dog.module.css";

const Cat_Dog: React.FC = () => {
  const [isCat, setIsCat] = useState(true);

  const radioButtonChangeHandler: (currentlyIsCat: boolean) => void = (
    currentlyIsCat
  ) => {
    setIsCat(currentlyIsCat);
  };

  return (
    <>
      <p>
        Game 4: Cat-dog. Select the cat or dog, and see what they can do. Not
        the most fun as a game, but shows I know how to code objects.
      </p>
      <form className={classes.form}>
        <label htmlFor="Cat">
          <input
            id="Cat"
            type="radio"
            name="group"
            value="Cat"
            onChange={() => radioButtonChangeHandler(true)}
          />
          Cat
        </label>
        <label htmlFor="Dog">
          <input
            id="Dog"
            type="radio"
            name="group"
            value="Dog"
            onChange={() => radioButtonChangeHandler(false)}
          />
          Dog
        </label>
        <button className={classes.button}>Speak</button>
        <button className={classes.button}>Do a Trick</button>
        {!isCat && <button className={classes.button}>Chew a Bone</button>}
      </form>
    </>
  );
};

export default Cat_Dog;
