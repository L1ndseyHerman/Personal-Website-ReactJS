import React from "react";
import Wrapper from "../components/Wrapper";
import classes from "./Contact.module.css";
import bobImage from "./bobseventy.png";

const Contact: React.FC = () => {
  //  Whoops, I WANT the image to stick around after the animation ends, so I
  //  was fine without React Transition Group this whole time!
  //console.log("I'm on the DOM!");

  return (
    <div>
      <Wrapper title="Contact">
        <img className={classes.bob} src={bobImage} alt="Moving Bob!" />
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
