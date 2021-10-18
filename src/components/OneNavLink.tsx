import React from "react";

import { NavLink } from "react-router-dom";

import classes from "./NavLink.module.css";

const OneNavLink: React.FC<{ text: string; theUrl: string }> = (props) => {
  return (
    <NavLink to={props.theUrl} className={classes.navLink}>
      {props.text}
    </NavLink>
  );
};

export default OneNavLink;
