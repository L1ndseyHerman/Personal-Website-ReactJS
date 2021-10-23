import React from "react";
import Wrapper from "../components/Wrapper";
import classes from "./Contact.module.css";
import bobImage from "./bobseventy.png";

const Contact: React.FC = () => {
  return (
    <Wrapper title="Contact">
      <img className={classes.bob} src={bobImage} alt="Moving Bob!" />
      <p>
        Email:&nbsp;
        <a href="mailto:lherman21@jcu.edu" className={classes.link}>
          lherman21@jcu.edu
        </a>
      </p>
      <p>
        Linked In:&nbsp;
        <a
          href="https://www.linkedin.com/in/lindseyaherman/"
          className={classes.link}
        >
          My_LinkedIn
        </a>
      </p>
    </Wrapper>
  );
};

export default Contact;
