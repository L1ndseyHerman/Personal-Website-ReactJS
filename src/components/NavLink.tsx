import React from "react";

import classes from "./NavLink.module.css";

const NavLink: React.FC<{ text: string }> = (props) => {
  return <p className={classes.navLink}>{props.text}</p>;
};

export default NavLink;
