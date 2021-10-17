import React from "react";

import classes from "./Wrapper.module.css";

const Wrapper: React.FC = (props) => {
  return (
    <div className={classes.sky}>
      <h1 className={classes.title}>Title</h1>
      <div className={classes.cloud}>{props.children}</div>
    </div>
  );
};

export default Wrapper;
