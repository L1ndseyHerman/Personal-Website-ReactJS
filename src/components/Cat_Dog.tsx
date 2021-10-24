import React, { useState } from "react";
import classes from "./Cat_Dog.module.css";
import catMeowing from "./CatMeowing.png";
import nopeGrumpyCat from "./NopeGrumpyCat.png";
import dogBarking from "./DogBarking.png";
import dogShakingPaws from "./DogShakingPaws.png";
import dogChewingBone from "./DogChewingBone.png";

//	Need the function, .prototype, and an instance for an object.
const Animal = () => {
  "speak";
  "doTrick";
};
Animal.prototype = {
  constructor: Animal,
  speak: "Generic sound",
  doTrick: "Shakes your hand.",
};

const Cat = () => {
  "speak";
  "doTrick";
};
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.speak = "Meow.";
Cat.prototype.doTrick = "Nope.";
//	My irl cat's name is Huckleberry :)
const huckleberry = Object.create(Cat.prototype);

const Dog = () => {
  "speak";
  "doTrick";
  "chewBone";
};
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
//	Overriding Animal:
Dog.prototype["speak"] = "Woof!";
//	Not overriding Animal:
//Dog.prototype["doTrick"] =
//	Creating a new property:
Dog.prototype["chewBone"] = "Yum!";
//  I don't have a dog.
const fido = Object.create(Dog.prototype);

const Cat_Dog: React.FC = () => {
  const [isCat, setIsCat] = useState(true);
  const [parText, setParText] = useState("");

  const radioButtonChangeHandler: (currentlyIsCat: boolean) => void = (
    currentlyIsCat
  ) => {
    setIsCat(currentlyIsCat);
    setParText("");
  };

  const speakButtonHandler: () => void = () => {
    if (isCat) {
      setParText(huckleberry.speak);
    } else {
      setParText(fido["speak"]);
    }
  };

  const trickButtonHandler: () => void = () => {
    if (isCat) {
      setParText(huckleberry.doTrick);
    } else {
      setParText(fido["doTrick"]);
    }
  };

  const chewButtonHandler: () => void = () => {
    setParText(fido["chewBone"]);
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
        <button
          className={classes.button}
          type="button"
          onClick={speakButtonHandler}
        >
          Speak
        </button>
        <button
          className={classes.button}
          type="button"
          onClick={trickButtonHandler}
        >
          Do a Trick
        </button>
        {!isCat && (
          <button
            className={classes.button}
            type="button"
            onClick={chewButtonHandler}
          >
            Chew a Bone
          </button>
        )}
      </form>
      {parText !== "" && (
        <img
          src={dogShakingPaws}
          className={classes.image}
          alt={dogShakingPaws}
        />
      )}
      <p className={classes.par}>{parText}</p>
    </>
  );
};

export default Cat_Dog;
