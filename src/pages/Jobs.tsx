import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import classes from "./Jobs.module.css";

const Jobs: React.FC = () => {
  const [jobNumber, setJobNumber] = useState(0);

  //const radioButtonChangeHandler = (currentJobNumber: number) => {
  /*const radioButtonChangeHandler = (
    event: ChangeEventHandler<HTMLInputElement>, => void
  ) => {
    setJobNumber(event.name);
  };*/

  /*let myAdd2: (baseValue: number, increment: number) => number = function (x, y) {
    return x + y;
  };*/

  /*const radioButtonChangeHandler: (
    event: ChangeEventHandler<HTMLInputElement>
  ) => void = (event) => {
    setJobNumber(event.name);
  };*/

  const radioButtonChangeHandler: (currentJobNumber: number) => void = (
    currentJobNumber
  ) => {
    setJobNumber(currentJobNumber);
  };

  return (
    <div>
      <Wrapper title="Jobs">
        <fieldset className={classes.fieldset}>
          <form className={classes.form}>
            <legend className={classes.legend}>
              Select a Job to Learn More About it:
            </legend>
            <label htmlFor="Boyd">
              <input
                id="Boyd"
                type="radio"
                name="group"
                value="Boyd"
                onChange={() => radioButtonChangeHandler(6)}
              />
              Boyd Watterson Asset Manangement
            </label>
            <label htmlFor="Eagle">
              <input
                id="Eagle"
                type="radio"
                name="group"
                value="Eagle"
                onChange={() => radioButtonChangeHandler(5)}
              />
              Giant Eagle
            </label>
            <label htmlFor="Health">
              <input
                id="Health"
                type="radio"
                name="group"
                value="Health"
                onChange={() => radioButtonChangeHandler(4)}
              />
              Lake Health
            </label>
            <label htmlFor="Sears">
              <input
                id="Sears"
                type="radio"
                name="group"
                value="Sears"
                onChange={() => radioButtonChangeHandler(3)}
              />
              Sears
            </label>
            <label htmlFor="Pizza">
              <input
                id="Pizza"
                type="radio"
                name="group"
                value="Pizza"
                onChange={() => radioButtonChangeHandler(2)}
              />
              Pizza Hut
            </label>
            <label htmlFor="Tavern">
              <input
                id="Tavern"
                type="radio"
                name="group"
                value="Tavern"
                onChange={() => radioButtonChangeHandler(1)}
              />
              Chesterland Tavern
            </label>
          </form>
        </fieldset>
        {jobNumber}
      </Wrapper>
    </div>
  );
};

export default Jobs;
