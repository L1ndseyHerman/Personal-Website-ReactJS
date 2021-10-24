import React, { useRef, useState } from "react";
import classes from "./CrypticCode.module.css";

//	I originally made some of these have single quotes and some double-quotes to show
//  I know they are interchangable, unlike in Java, where a "" is a string and a
//  '' is a char. Now that I'm using ESLint, it auto-corrects quotes to "" anytime I
//  save though, so that's that.
const ALPHABET_ARRAY = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//	These are numbers to show == can cast a string to match them.
const NUMBER_ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const CrypticCode: React.FC = () => {
  const textToEncryptRef = useRef<HTMLInputElement>(null);
  const [encryptedText, setEncryptedText] = useState("");

  const encryptHandler = () => {
    //  Darn, I'm not sure how to stop this warning :( The code works tho.
    const textToEncrypt = textToEncryptRef.current!.value;

    //  Don't forget u need the trim() to REALLY check the length!
    if (textToEncrypt.trim().length > 0) {
      const encryptionArray = [];
      let finalEncryptionText = "";
      let tempIndex = -1;

      for (let index = 0; index < textToEncrypt.length; index++) {
        tempIndex = ALPHABET_ARRAY.indexOf(textToEncrypt[index]);
        //	Means that character in the text is a lowercase letter:
        if (tempIndex > -1) {
          tempIndex = tempIndex + 1;
          //	Loop to index 0 if index out-of-bounds (26):
          if (tempIndex >= ALPHABET_ARRAY.length) {
            tempIndex = 0;
          }
          //	Add it to the end of the encrypted array.
          encryptionArray.push(ALPHABET_ARRAY[tempIndex]);
        }

        //	Now checking the numbers. This time, I'm using a for-loop to show that I know that == can cast a string to a number to check if
        //	they're equal
        for (
          let numbersIndex = 0;
          numbersIndex < NUMBER_ARRAY.length;
          numbersIndex++
        ) {
          //  ESLint won't let me use ==, so here is a conversion:
          //if (textToEncrypt[index] == NUMBER_ARRAY[numbersIndex])
          if (textToEncrypt[index] === NUMBER_ARRAY[numbersIndex].toString()) {
            //	It just so happens that the index of each number is the same as the number stored at that index.
            tempIndex = numbersIndex - 1;
            //	Loop to index 9 if it's out-of-bounds (-1):
            if (tempIndex < 0) {
              tempIndex = NUMBER_ARRAY.length - 1;
            }
            //	Add it to the end of the encrypted array.
            encryptionArray.push(NUMBER_ARRAY[tempIndex]);
          }
        }
      }

      //	Turns the array into a string.
      for (let index = 0; index < encryptionArray.length; index++) {
        finalEncryptionText = finalEncryptionText + encryptionArray[index];
      }

      setEncryptedText(finalEncryptionText);
    }
  };

  return (
    <>
      <p>
        Game 2: Cryptic Code. Type some lower-case letters and numbers into the
        box below, then click the button and watch as the text transforms before
        your eyes! Can you tell how it&apos;s changed? Note, if you type
        something that is not a number or lower-case letter, it will not show
        up.
      </p>
      <input className={classes.input} type="text" ref={textToEncryptRef} />
      <button className={classes.button} onClick={encryptHandler}>
        Encrypt
      </button>
      <p className={classes.encryptedText}>{encryptedText}</p>
    </>
  );
};

export default CrypticCode;
