import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import classes from "./Jobs.module.css";

const Jobs: React.FC = () => {
  const [jobNumber, setJobNumber] = useState(0);

  const radioButtonChangeHandler: (currentJobNumber: number) => void = (
    currentJobNumber
  ) => {
    setJobNumber(currentJobNumber);
  };

  let jobResponsibilities = null;

  if (jobNumber === 1) {
    jobResponsibilities = (
      <ul>
        <li className={classes.dateLi}>April 2012 - August 2012</li>
        <li className={classes.otherLi}>Washed dishes</li>
      </ul>
    );
  } else if (jobNumber === 2) {
    jobResponsibilities = (
      <ul>
        <li className={classes.dateLi}>October 2012 - October 2013</li>
        <li className={classes.otherLi}>
          Prepared food following Pizza Hut&apos;s safety guidelines
        </li>
        <li className={classes.otherLi}>Counted change</li>
      </ul>
    );
  } else if (jobNumber === 3) {
    jobResponsibilities = (
      <ul>
        <li className={classes.dateLi}>October 2013 - April 2014</li>
        <li className={classes.otherLi}>
          Organized and tidied store and dressing-room clothing items, sorting
          by color and size
        </li>
        <li className={classes.otherLi}>
          Searched through large quantities of items for small but significant
          errors, such as a bathing suit hanging on the coat display
        </li>
      </ul>
    );
  } else if (jobNumber === 4) {
    jobResponsibilities = (
      <ul>
        <li className={classes.dateLi}>June 2014 - November 2014</li>
        <li className={classes.otherLi}>Unpaid volunteer position</li>
        <li className={classes.otherLi}>
          Scanned paper patient records into Lake Health&apos;s computerized
          patient database
        </li>
      </ul>
    );
  } else if (jobNumber === 5) {
    jobResponsibilities = (
      <ul>
        <li className={classes.dateLi}>November 2014 - October 2020</li>
        <li className={classes.otherLi}>
          Scaned and keyed grocery data into Giant Eagle&apos;s Java cashiering
          program at a rate of &ge; 13 items/minute
        </li>
        <li className={classes.otherLi}>
          Instructed new shoppers how to use chip readers, Apple Pay, and the
          Giant Eagle app
        </li>
        <li className={classes.otherLi}>
          Provided excellent customer service, receiving &ge; 2 positive online
          survey reviews
        </li>
      </ul>
    );
  } else if (jobNumber === 6) {
    jobResponsibilities = (
      <ul>
        <li className={classes.dateLi}>November 2020 - February 2021</li>
        <li className={classes.otherLi}>
          Created procedures in Delphi, such one to rename and/or delete all
          duplicate files in a folder
        </li>
        <li className={classes.otherLi}>
          Performed CRUD operations on a MSSQL database using the FireDAC
          library
        </li>
      </ul>
    );
  }

  return (
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
        {jobResponsibilities}
      </fieldset>
    </Wrapper>
  );
};

export default Jobs;
