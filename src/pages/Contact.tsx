import React from "react";
import Wrapper from "../components/Wrapper";
import classes from "./Contact.module.css";

const Contact: React.FC = () => {
  return (
    <div>
      <Wrapper title="Contact">
        <p>
          Email:&nbsp;
          <a href="mailto:lindseyherman95@yahoo.com" className={classes.link}>
            lindseyherman95@yahoo.com
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
    </div>
  );
};

export default Contact;
