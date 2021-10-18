import React from "react";

import classes from "./Wrapper.module.css";

import Nav from "./Nav";

const Wrapper: React.FC<{ title: string }> = (props) => {
  return (
    <div className={classes.sky}>
      <h1 className={classes.title}>{props.title}</h1>
      <Nav />
      <div className={classes.cloud}>{props.children}</div>
    </div>
  );
};

export default Wrapper;
