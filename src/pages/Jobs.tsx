import React from "react";
import Wrapper from "../components/Wrapper";
import classes from "./Jobs.module.css";

const Jobs: React.FC = () => {
  return (
    <div>
      <Wrapper title="Jobs">
        <fieldset className={classes.fieldset}>
          <form className={classes.form}>
            <h4 className={classes.h4}>Select a Job to Learn More About it:</h4>
            <label htmlFor="def">
              <input
                id="def"
                type="radio"
                name="group"
                value="definitely"
                checked
              />
              Boyd Watterson Asset Manangement
            </label>
            <label htmlFor="maybe">
              <input id="maybe" type="radio" name="group" value="maybe" />
              Maybe
            </label>
            <label htmlFor="no">
              <input id="no" type="radio" name="group" value="not-sure" />
              Not Sure
            </label>
          </form>
        </fieldset>
      </Wrapper>
    </div>
  );
};

export default Jobs;
