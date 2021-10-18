import React from "react";

import classes from "./Nav.module.css";

import NavLink from "./NavLink";

const Nav: React.FC = () => {
  return (
    <div className={classes.nav}>
      <NavLink text="Home" />
      <NavLink text="Education" />
      <NavLink text="Jobs" />
      <NavLink text="Skills" />
      <NavLink text="Hobbies" />
      <NavLink text="Contact" />
      <NavLink text="JS Skills" />
      <NavLink text="Fake Webpages" />
    </div>
  );
};

export default Nav;
