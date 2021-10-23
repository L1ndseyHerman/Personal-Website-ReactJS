import React, { useState } from "react";
import classes from "./RandomSentenceGenerator.module.css";

const SENTENCE_ARRAY = [
  ["A mysterious ", "The one and only", "Some random"],
  [
    " fluffy,",
    " pink,",
    " hairy,",
    " terrifying,",
    " delightful,",
    " badass,",
    " sexy,",
    " clumsy,",
    " invisible,",
    " drunk,",
  ],
  [
    " partying",
    " trash-talking",
    " gravity-defying",
    " spork-throwing",
    " laser-shooting",
    " fanfiction-writing",
    " soul-stealing",
    " racecar-driving",
    " tap-dancing",
  ],
  [
    " Grumpy Cat",
    " My Little Pony",
    " sock",
    " robot",
    " final exam",
    " cute guy",
    " superhero",
    " anime girl",
    " Grim Reaper",
    " penguin",
    " monkey",
    " ballerina",
  ],
  [
    " angrily",
    " timidly",
    " lazily",
    " cheerfully",
    " foolishly",
    " stubbornly",
    " accidentally",
  ],
  [
    " does parkour",
    " knits a sweater",
    " has a teaparty",
    " plots world domination",
    " gains magic powers",
    " finds true love",
    " sings a Justin Bieber song",
    " makes a hit YouTube video",
    " sells their soul",
    " catches Coronavirus",
  ],
  [
    " just in time for dinner.",
    " in a dumpster.",
    " with honor.",
    " at the center of a black hole.",
    " at Giant Eagle.",
    " despite living in Cleveland, Ohio.",
    " quietly, so as not to get grounded.",
    " on the ceiling.",
    " on a planet where everyone burps to communicate.",
    " at the bottom of the ocean.",
  ],
];

const RandomSentenceGenerator: React.FC = () => {
  const [randomSentence, setRandomSentence] = useState("");

  const randomSentenceButtonHandler = () => {
    setRandomSentence(
      SENTENCE_ARRAY[0][Math.floor(Math.random() * 3)] +
        SENTENCE_ARRAY[1][Math.floor(Math.random() * 10)] +
        SENTENCE_ARRAY[2][Math.floor(Math.random() * 9)] +
        SENTENCE_ARRAY[3][Math.floor(Math.random() * 12)] +
        SENTENCE_ARRAY[4][Math.floor(Math.random() * 7)] +
        SENTENCE_ARRAY[5][Math.floor(Math.random() * 10)] +
        SENTENCE_ARRAY[6][Math.floor(Math.random() * 10)]
    );
  };

  return (
    <>
      <p>
        Game 1: Random Sentence Generator. It&apos;s like Mad Libs, but the
        computer fills in ALL the blanks for an extra-hilarious sentence! Each
        click of the button below generates a new sentence.
      </p>
      <button className={classes.button} onClick={randomSentenceButtonHandler}>
        Generate Sentence
      </button>
      <p>{randomSentence}</p>
    </>
  );
};

export default RandomSentenceGenerator;
